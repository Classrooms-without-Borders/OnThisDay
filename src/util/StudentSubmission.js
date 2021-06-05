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

    //using template strings `${}` so we can console.log() for debugging 
    get getId() {
        return this._id;
    }

    set setId(value) {
        this._id = value;
    }

    get eventTitle() {
        return `${this.eventTitle}`;
    }
    set eventTitle(value) {
        this._eventTitle = value;
    }

    get eventDate() {
        return this.eventDate;
    }
    set eventDate(value) {
        this._eventDate = value;
    }

    get eventDescrip() {
        return this.eventDescrip;
    }
    set eventDescrip(value) {
        this._eventDescrip = value;
    }

    get image() {
        return this.image;
    }
    set image(value) {
        this._eventDescrip = value;
    }

    get source() {
        return this.source;
    }
    set source(value) {
        this._source = value;
    }

    get school() {
        // TODO: get school info (JSON) from Firestore
        return this.schoolRef;
    }
    // set school(value) {
    //     // TODO: get school info (JSON) from Firestore
    //     this.schoolRef = value;
    // }

    get studentName(){
        return this.studentName;
    }
    set studentName(value) {
        this._studentName = value;
    }

    get submitDate() {
        return this.submitDate;
    }
    set submitDate(value) {
        this._submitDate = value;
    }

    get className() {
        return `${this.className}`;
    }
    set className(value) {
        this._className = value;
    }


}

export default StudentSubmission;