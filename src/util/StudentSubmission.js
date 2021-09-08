/*
Represents an individual student submission, similar to the submission collection in Firebase
*/

class StudentSubmission {
    constructor(
        id, subjectName, location, eventDate, description,
        images, sources, studentName, submitDate, className
    ) {
        this.id = id;
        this.subjectName = subjectName;
        this.location = location;
        this.eventDate = eventDate;
        this.description = description;
        this.images = images; // list of reference strings
        this.sources = sources; // map of (title, URL) pairs
        this.studentName = studentName;
        this.submitDate = submitDate;
        this.className = className;
    }
}

export default StudentSubmission;