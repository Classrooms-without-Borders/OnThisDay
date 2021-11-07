import React, { useState, useEffect } from 'react';
import { getAllVerified } from '../util';

//return a StudnetSubmission given the current ulr link that we are in
function GetStudentSubmissionWithUrl() {

    const [submissions, setSubmissions] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllVerified(); //just get the one
            setSubmissions(data);
        };
        fetchData();
    }, []);

    let str =  JSON.stringify(window.location.pathname);
    let submissionId = str.split("/").pop();


    submissionId = submissionId.replace('"', '');

    let mySubmission;
    if (submissions != null) {
        var arrayLength = submissions.length;
        for (var i = 0; i < arrayLength; i++) {
            let string_id = submissions[i].id;
            string_id = string_id.replace('"', '');
            if (submissionId === string_id) {
                mySubmission = JSON.parse(JSON.stringify(submissions[i]));
            }
            
        }
    }
    return mySubmission;
}

export default GetStudentSubmissionWithUrl;