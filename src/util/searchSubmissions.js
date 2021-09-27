import firebase from 'firebase';
import StudentSubmission from './StudentSubmission';

async function searchSubmissions(
    location=null, 
    eventDateStart=null,
    eventDateEnd=null,
    subjectName=null,
    studentName=null,
    schoolName=null,
    grade=null,
    teacherName=null,
) {
    const db = firebase.firestore();

    let res = [];

    if (eventDateStart && eventDateEnd) {
        // widen time interval by +-24h to account for timezone differences
        eventDateStart = new Date(eventDateStart.getTime() - 60000 * 60 * 24);
        eventDateEnd = new Date(eventDateEnd.getTime() + 60000 * 60 * 24);

        if (location) { // basic search
            await db.collection('submissions')
                .where('location', '==', location)
                .where('date', '>=', eventDateStart)
                .where('date', '<=', eventDateEnd)
                .get()
                .then((entries) => {
                    entries.forEach((doc) => {
                        res.push(new StudentSubmission(
                            doc.data().id, doc.data().subjectName, doc.data().location, 
                            doc.data().date, doc.data().description, doc.data().sources,
                            `${doc.data().studentFirst} ${doc.data().studentLast}`,
                            doc.data().submittedDate,
                            // TODO: store student's class
                        ));
                    });
                    console.log(res);
                });
        }
    }

    return res;
}

export default searchSubmissions;