const functions = require("firebase-functions");
const app = require('express')();

const {
  getAllSubmissions,
  postSubmission,
  deleteSubmission,
  editSubmission,
} = require('./apis/submissions');

app.get('/submissions', getAllSubmissions);
app.post('/submissions/new', postSubmission);
app.delete('/submissions/delete/:submissionId', deleteSubmission);
app.put('/submissions/edit/:submissionId', editSubmission);

exports.api = functions.https.onRequest(app);