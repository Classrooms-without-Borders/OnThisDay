/*
Represents an individual student submission, similar to the submission collection in Firebase
*/

class StudentSubmission {
    
    eventTitle="";
    //assuming date object
    eventDate = new Date();
    eventDescrip="";
    //image will be array of Strings?
    image=[];
    //source will be array of Strings?
    source = [];
    studentName="";
    //assuming date object
    submitDate = new Date();
    className="";

    constructor(eventTitle, eventDate, eventDescrip, image, source, studentName, submitDate, className) {
        this.eventTitle = eventTitle;
        this.eventDate = eventDate;
        this.eventDescrip = eventDescrip;
        this.image = image;
        this.source = source;
        this.studentName = studentName;
        this.submitDate = submitDate;
        this.className = className;
    }

    //using template strings `${}` so we can console.log() for debugging 
    get eventTitle() {
        return `${this.eventTitle}`;
    }
    set eventTitle(value) {
        this.eventTitle = value;
    }

    get eventDate() {
        return this.eventDate;
    }
    set eventDate(value) {
        this.eventDate = value;
    }

    get eventDescrip() {
        return this.eventDescrip;
    }
    set eventDescrip(value) {
        this.eventDescrip = value;
    }

    get image() {
        return this.image;
    }
    set image(value) {
        this.eventDescrip = value;
    }

    get source() {
        return this.source;
    }
    set source(value) {
        this.source = value;
    }

    get studentName() {
        return `${this.studentName}`;
    }
    set studentName(value) {
        this.studentName = value;
    }


    get submitDate() {
        return this.submitDate;
    }
    set submitDate(value) {
        this.submitDate = value;
    }

    get className() {
        return `${this.className}`;
    }
    set className(value) {
        this.className = value;
    }


}