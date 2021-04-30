let db = firebase.firestore();

var input = $('#subimage');
var preview = $("#picpreview");

// Save a new submission to the database, using the input in the form
function sub (event) {
  event.preventDefault();

  // Get input values from each of the form elements
  var title = $("#dateinhist").val();
  var person = $("#nameofindv").val();
  var link = $("#sourceLink").val();
  var city = $("#cityvar").val();
  var country = $("#countryvar").val();
  var description = $("#eventdesc").val();
  var sourceName = $("#sourcevar").val();
  var studentName = $("#studentname").val();
  var gradeLevel=$("#gradelevel").val();
  var teacherName=$("#teachername").val();
  var schoolName=$("#schoolname").val();
  var submissionID=studentName.concat(schoolName);
  // uploads the images to firebase storage
  let picReferences = [];
  for (let i = 0; i < input[0].files.length; i++) {
    let ref = storage.ref().child("images/" + input[0].files[i].name);
    
    ref.put(input[0].files[i]).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      picReferences.push(snapshot.ref.getDownloadURL());
    });
  }

  db.collection("classes").doc(submissionID).set({
    gradeLevel: gradeLevel,
    schoolName: schoolName,
    teacherName: teacherName
  })
  // Push a new submission object to the database using those values
  db.collection("unverified1").doc(submissionID).set({
    title: title,
    name: person,
    cityName: city,
    countryName: country,
    description: description,
    sources: sourceName,
    url: link,
    images: picReferences
  })
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
  let docID = db.collection("unverified1").doc(submissionID);
  
  verify(docID);
};

function verify(docRef) {
  
  setTimeout(() => {
    docRef.get().then((doc) => {
      if (doc.exists) {
          var promise = db.collection("verified").doc(docRef.id).set(doc.data());
          console.log("Document data:", doc.data());
          return true;
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
          return false;
      }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

    
  }, 3000);

  setTimeout(() => {
    docRef.delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  }, 6000);
    
  
}

// Multiple images preview in browser
input.change(function() {
    preview.html('');
    for (var i = 0; i < input[0].files.length; i++) {
      preview.append('<img src="'+ window.URL.createObjectURL(this.files[i])+ '" height="100px"/>');
    }
});


// Find the HTML element with the id submissionForm and when the submit
// event is triggered on that element, call sub.
$("#submissionForm").submit(sub);
