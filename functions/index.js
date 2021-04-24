const functions = require('firebase-functions');
const app = require('express')();

const { 
    getAllSubmissions,
    postSubmission,
    deleteSubmission,
    editSubmission,
} = require('./apis/submissions');

app.get('/submissions', getAllSubmissions);
app.post('/submission', postSubmission);
app.delete('/submissions/:submissionId', deleteSubmission);
app.put('/submission/:submissionId', editSubmission);

exports.api = functions.https.onRequest(app);