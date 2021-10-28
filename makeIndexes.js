/**
 * Run this script to programmatically write Firestore indexes to the
 * file firestore.indexes.json, which are required for compound queries.
 * Then run: firebase deploy --only firestore:indexes
 * This will deploy the indexes to Firestore.
 * 
 * Note: Firestore only supports up to 200 indexes
 * This means we can only support index combos for up to 7 fields,
 * since 2^8 > 200. We exclude date here because we will always be
 * querying for date -- if dates are not provided by the user, we
 * set the dates to the earliest and latest possible dates supported
 * by this project.
 */
const fs = require('fs');

const fieldpaths = [
    'location',
    'grade',
    'school',
    'studentFirst',
    'studentLast',
    'subjectName',
    'teacherName'
];

const combinations = [];
const len = Math.pow(2, fieldpaths.length);

for (let i = 0; i < len; i++) {
    const tmp = [];
    for (let j = 0; j < fieldpaths.length; j++) {
        if ((i & Math.pow(2, j))) {
            tmp.push(fieldpaths[j]);
        }
    }
    if (tmp.length > 1) {
        combinations.push(tmp);
    }
}

let result = [];
for (const combo of combinations) {
    const fields = [];
    for (const field in combo) {
        fields.push({ 'fieldPath': combo[field], order: 'ASCENDING' });
    }
    result.push({
        'collectionGroup': 'verified',
        'queryScope': 'COLLECTION',
        'fields': [
            { 'fieldPath': 'date', order: 'ASCENDING'},
            ...fields
        ]
    });
}

result = {
    'indexes': result,
    'fieldOverrides': []
}

fs.writeFile('firestore.indexes.json', JSON.stringify(result), err => {
    if (err) throw err;
});