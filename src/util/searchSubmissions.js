import firebase from 'firebase';
import StudentSubmission from './StudentSubmission';

/**
 * Bug workaround that expands a date range by 1 month on either side.
 * This shouldn't be necessary, but our Date objects seem inconsistent with
 * Firestore, and expected results don't show up unless we expand the range.
 * TODO Anna: change our Date objects to deal with this bug.
 * @param {Date} start Original start date
 * @param {Date} end Original end date
 * @returns {[Date, Date]} Expanded start and end dates
 */
function cleanDates(start, end) {
    const startMonth = start.getMonth();
    const endMonth = end.getMonth();

    let expStart, expEnd;

    expStart = new Date(
        start.getFullYear() - (startMonth ? 0 : 1), // subtract a year if startMonth was Jan
        startMonth ? startMonth - 1 : 11, // change month to Nov if year has decremented
        start.getDate()
    );

    expEnd = new Date(
        end.getFullYear() + (endMonth === 11), // add a year if startMonth was Dec
        endMonth < 11 ? endMonth + 1 : 0, // change month to Jan if year has incremented
        end.getDate()
    );

    return [expStart, expEnd];
}

/**
 * Searches verified collection in Firestore for all submissions matching
 * the given search parameters. All parameters are optional.
 * @param {String} location Location of event
 * @param {Date} dateFrom Date at which to begin query
 * @param {Date} dateTo Date at which to end query
 * @param {String} subjectName Subject name
 * @param {String} studentFirst Student's first name
 * @param {String} studentLast Student's last name
 * @returns {Array<StudentSubmission>} Array of objects representing submissions.
 */
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

    // key: parameter DOM id
    // value: [Firestore parameter, comparison operator]
    const params = {
        'location': ['location', '=='],
        'dateFrom': ['date', '>='],
        'dateTo': ['date', '<='],
        'subjectName': ['subjectName', '=='],
        'studentFirst': ['studentFirst', '=='],
        'studentLast': ['studentLast', '=='],
        'grade': ['grade', '=='],
        'teacherName': ['teacherName', '==']
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
                    doc.data().imageList,
                    doc.data().sources,
                    `${doc.data().studentFirst} ${doc.data().studentLast}`,
                    doc.data().submittedDate,
                    doc.data().school,
                    doc.data().grade,
                    doc.data().teacherName,
                ));
            });
        });

    return res;
}

export default searchSubmissions;