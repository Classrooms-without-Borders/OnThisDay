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
 
  // uploads the images to firebase storage
  let picReferences = [];
  for (let i = 0; i < input[0].files.length; i++) {
    let ref = storage.ref().child("images/" + input[0].files[i].name);
    
    ref.put(input[0].files[i]).then((snapshot) => {
      console.log('Uploaded a blob or file!');
      picReferences.push(snapshot.ref.getDownloadURL());
    });
  }

  // Push a new submission object to the database using those values
  db.collection("submissions").add({
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
};

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