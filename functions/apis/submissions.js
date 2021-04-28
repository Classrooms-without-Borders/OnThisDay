const { admin, db } = require('../util/admin');

// Retrieves all submissions from Firestore (most recently added first)
exports.getAllSubmissions = (request, response) => {
  db.collection('submissions')
    .orderBy('dateAdded', 'desc')
    .get()
    .then((data) => {
      let submissions = [];
      data.forEach((entry) => {
        submissions.push({
          id: entry.id,
          dateAdded: entry.data().dateAdded,
          class: entry.data().class["_path"], // TODO: process further, .class sends credentials as well
          date: entry.data().date,
          description: entry.data().description,
          images: entry.data().images,
          location: entry.data().location,
          sourceTitles: entry.data().sourceTitles,
          sourceUrls: entry.data().sourceUrls,
          student: entry.data().student,
          subject: entry.data().subject
        });
      });
      return response.json(submissions);
    }).catch((err) => {
      console.log(err);
      return response.status(500).json({ error: err.code });
    });
};

// Posts a new submission to Firestore
exports.postSubmission = (request, response) => {
  const newSubmission = {
    dateAdded: new Date(),
    class: request.body.class, // TODO: new admin.firestore.DocumentReference(request.body.class),
    date: new Date(request.body.date),
    description: request.body.description,
    images: request.body.images,
    location: new admin.firestore.GeoPoint(parseFloat(request.body.latitude), parseFloat(request.body.longitude)),
    sourceTitles: request.body.sourceTitles,
    sourceUrls: request.body.sourceUrls,
    student: request.body.student,
    subject: request.body.subject
  };

  db.collection('submissions')
    .add(newSubmission)
    .then((entry) => {
      const responseSubmission = newSubmission;
      responseSubmission.id = entry.id;
      return response.json(responseSubmission);
    }).catch((err) => {
      response.status(500).json({ error: 'Something went wrong' });
      console.log(err);
    });
};

// Deletes the submission with the given ID from Firestore
exports.deleteSubmission = (request, response) => {
  const submission = db.doc(`/submissions/${request.params.submissionId}`);
  submission.get()
    .then((entry) => {
      if (!entry.exists) {
          return response.status(404).json({ error: 'Submission not found' });
      }
      return submission.delete();
    }).then(() => {
      response.json({ message: 'Delete successful' });
    }).catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

// Updates the specified fields of the submission with the given ID
exports.editSubmission = (request, response) => {
  if (request.body.submissionId) {
    response.status(403).json({ message: 'Cannot edit submission ID' });
  }
  if (request.body.dateAdded) {
    response.status(403).json({ message: 'Cannot edit date added' });
  }
  let submission = db.collection('submissions').doc(`${request.params.submissionId}`);
  // TODO: pre-process request.body before updating
  submission.update(request.body)
    .then(() => {
      response.json({ message: 'Update successful' });
    }).catch((err) => {
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};