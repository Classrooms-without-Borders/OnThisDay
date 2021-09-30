import firebase from 'firebase';
import StudentSubmission from './StudentSubmission';

// expands a date range by 1 month on either side
// this deals with messy time offsets when pulling from Firestore
// TODO: find a better way to deal with time offsets!
function cleanDates(start, end) {
    const startMonth = start.getMonth();
    const endMonth = end.getMonth();

    let expStart, expEnd;

    if (startMonth > 0) {
        expStart = new Date(
            start.getFullYear(), startMonth - 1, start.getDate()
        );
    } else {
        expStart = new Date(
            start.getFullYear() - 1, 11, start.getDate()
        );
    }

    if (endMonth < 11) {
        expEnd = new Date(
            end.getFullYear(), endMonth + 1, end.getDate()
        );
    } else {
        expEnd = new Date(
            end.getFullYear() + 1, 0, end.getDate()
        );
    }
    
    return [expStart, expEnd];
}

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
        [eventDateStart, eventDateEnd] = cleanDates(eventDateStart, eventDateEnd);

        if (location) { // basic search
            await db.collection('verified')
                .where('location', '==', location)
                .where('date', '>=', eventDateStart)
                .where('date', '<=', eventDateEnd)
                .get()
                .then((entries) => {
                    entries.forEach((doc) => {
                        res.push(new StudentSubmission(
                            doc.data().id, 
                            doc.data().subjectName,
                            doc.data().location, 
                            doc.data().date,
                            doc.data().description,
                            doc.data().sources,
                            `${doc.data().studentFirst} ${doc.data().studentLast}`,
                            doc.data().submittedDate,
                            // TODO: store student's class
                        ));
                    });
                });
        }
    }
    return res;
}

export default searchSubmissions;