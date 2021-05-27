/*
Represents an individual student submission, similar to the submission collection in Firebase
*/

class StudentSubmission {
    constructor(
        subjectName, location, eventDate, description,
        images, sources, studentName, submittedDate, classRef
    ) {
        this.subjectName = subjectName;
        this.location = location;
        this.eventDate = eventDate;
        this.description = description;
        this.images = images; // list of reference strings
        this.sources = sources; // map of (title, URL) pairs
        this.studentName = studentName;
        this.submittedDate = submittedDate;
        this.classRef = classRef;
        this.schoolRef = ""; // TODO: retrieve school using classRef
    }

    get images() {
        // TODO: get actual images from Cloud Storage
        return this.images;
    }

    get class() {
        // TODO: get class info (JSON) from Firestore
        return this.classRef;
    }

    get school() {
        // TODO: get school info (JSON) from Firestore
        return this.schoolRef;
    }
}

export default StudentSubmission;