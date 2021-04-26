var config = {
    apiKey: "AIzaSyCO3fRNVd52LRfJtdvd3vTRjBUCtDMkMTs",
    authDomain: "sample1-7cd2a.firebaseapp.com",
    databaseURL: "https://sample1-7cd2a-default-rtdb.firebaseio.com",
    projectId: "sample1-7cd2a",
    storageBucket: "sample1-7cd2a.appspot.com",
  };

// Initialize Firebase app
firebase.initializeApp(config);

// Reference to submissions object in Firebase database
var submissions = firebase.database().ref("submission");

// Save a new submission to the database, using the input in the form
var sub = function () {

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
  submissions.push({
    "date in history": title,
    "person": person,
    "city": link,
    "country": country,
    "description": description,
    "source": sourceName,
    "source URL": link,
    "image(s)": pic
  });
};

// When the window is fully loaded, call this function.
// because we are attaching a submission to a particular HTML element
// in this function, we can't do that until the HTML element connected has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id submissionForm and when the submit
  // event is triggered on that element, call sub.
  $("#submissionForm").submit(sub);

});
