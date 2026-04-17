// HOME TUITION FORM
const homeForm = document.getElementById("homeTuitionForm");

if (homeForm) {
  homeForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      class: document.getElementById("class").value,
      subject: document.getElementById("subject").value,
      location: document.getElementById("location").value,
      contact: document.getElementById("contact").value,
      details: document.getElementById("details").value,
    };

    console.log("Home Tuition Request:", data);

    alert("Request Submitted!");

    homeForm.reset();
  });
}


// SCHOOL FORM
const schoolForm = document.getElementById("schoolForm");

if (schoolForm) {
  schoolForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
      schoolName: document.getElementById("schoolName").value,
      subject: document.getElementById("subject").value,
      location: document.getElementById("location").value,
      contact: document.getElementById("contact").value,
      details: document.getElementById("details").value,
    };

    console.log("School Request:", data);

    alert("Request Submitted!");

    schoolForm.reset();
  });
}
