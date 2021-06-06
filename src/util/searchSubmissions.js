import firebase from 'firebase';
import StudentSubmission from './StudentSubmission';

async function searchSubmissions(
    subjectName=null,
    location=null, 
    eventDate=null,
    studentName=null,
    schoolName=null,
    grade=null,
    teacherName=null,
) {
    const db = firebase.firestore();

    let res = [];

    if (location && eventDate) {
        await db.collection('submissions')
            .where('location', '==', location)
            .where('date', '==', eventDate)
            .get()
            .then((entries) => {
                console.log(entries);
                entries.forEach((doc) => {
                    res.push(new StudentSubmission(
                        doc.data().id, doc.data().subjectName, doc.data().location, 
                        doc.data().date, doc.data().description, doc.data().sources,
                        `${doc.data().studentFirst} ${doc.data().studentLast}`,
                        doc.data().submittedDate,
                        // TODO: convert class reference to name
                    ));
                    console.log(doc.data())
                });
            });
    }

    return res;
}

export default searchSubmissions;