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
    dateFrom=null,
    dateTo=null,
    subjectName=null,
    studentFirst=null,
    studentLast=null,
) {
    const args = Object.values(arguments).map(arg =>
        typeof arg === 'string' ? arg.split('%20').join(' ') : arg
    );

    const params = {
        'location': ['location', '=='],
        'dateFrom': ['date', '>='],
        'dateTo': ['date', '<='],
        'subjectName': ['subjectName', '=='],
        'studentFirst': ['studentFirst', '=='],
        'studentLast': ['studentLast', '==']
    };

    const db = firebase.firestore();

    let res = [];

    if (dateFrom && dateFrom !== '' && dateTo && dateTo !== '') {
        [args[1], args[2]] = cleanDates(dateFrom, dateTo);
    }

    // construct search function
    const attachParams = (collection) => {
        Object.values(params).forEach((param, index) => {
            if (args[index] && args[index] !== '') {
                collection = collection.where(...param, args[index]);
            }
        });
        return collection;
    }

    await attachParams(db.collection('verified'))
        .get()
        .then((entries) => {
            entries.forEach((doc) => {
                res.push(new StudentSubmission(
                    doc.id, 
                    doc.data().subjectName,
                    doc.data().location, 
                    '', '', // TODO Anna: add lat and lng
                    doc.data().date.toDate(),
                    doc.data().description,
                    doc.data().images,
                    doc.data().sources,
                    `${doc.data().studentFirst} ${doc.data().studentLast}`,
                    doc.data().submittedDate,
                    '' // TODO: store student's class
                ));
            });
        });

    return res;
}

export default searchSubmissions;