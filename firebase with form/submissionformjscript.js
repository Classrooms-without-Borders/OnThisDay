let db = firebase.firestore();

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
  var pic = $("#subimage").val();
  
  // Push a new submisison object to the database using those values
  db.collection("submissions").add({
    title: title,
    name: person,
    cityName: city,
    countryName: country,
    description: description,
    sources: sourceName,
    url: link,
    images: pic
  })
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
};

// Find the HTML element with the id submissionForm and when the submit
// event is triggered on that element, call sub.
$("#submissionForm").submit(sub);