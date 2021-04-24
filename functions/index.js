const functions = require('firebase-functions');
const app = require('express')();

const { 
    getAllSubmissions,
    postSubmission,
    deleteSubmission,
} = require('./apis/submissions');

app.get('/submissions', getAllSubmissions);
app.post('/submission', postSubmission);
app.delete('/submissions/:submissionId', deleteSubmission);

exports.api = functions.https.onRequest(app);