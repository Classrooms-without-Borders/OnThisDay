const { admin, db } = require('../util/admin');

exports.getAllSubmissions = (request, response) => {
    db.collection('submissions')
        .orderBy('date', 'desc')
        .get()
        .then((data) => {
            let submissions = [];
            data.forEach((entry) => {
                submissions.push({
                    id: entry.id,
                    class: entry.data().class,
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

exports.postSubmission = (request, response) => {
    const newSubmission = {
        class: request.query.class,
        date: new Date(request.query.date),
        description: request.query.description,
        images: JSON.parse(request.query.images),
        location: new admin.firestore.GeoPoint(parseFloat(request.query.latitude), parseFloat(request.query.longitude)),
        sourceTitles: JSON.parse(request.query.sourceTitles),
        sourceUrls: JSON.parse(request.query.sourceUrls),
        student: request.query.student,
        subject: request.query.subject
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