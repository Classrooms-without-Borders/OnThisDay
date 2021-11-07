/*
Represents an individual student submission, similar to the submission collection in Firebase
*/

class StudentSubmission {
    constructor(
        id, subjectName, location, lat, lng, eventDate, description,

        imageList, sources, studentName, submitDate, className

    ) {
        this.id = id;
        this.subjectName = subjectName;
        this.location = location;
        this.lat = lat;
        this.lng = lng;
        this.eventDate = eventDate;
        this.description = description;
        this.imageList = imageList; // map -> [imageLink, caption]
        this.sources = sources; // map of (title, URL) pairs
        this.studentName = studentName;
        this.submitDate = submitDate;
        this.school = school;
        this.grade = grade;
        this.teacherName = teacherName;
    }
}

export default StudentSubmission;