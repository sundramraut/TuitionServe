const homeForm = document.getElementById("homeTuitionForm");

if (homeForm) {
  homeForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      class: document.getElementById("class").value,
      subject: document.getElementById("subject").value,
      location: document.getElementById("location").value,
      contact: document.getElementById("contact").value,
      details: document.getElementById("details").value,
    };

    const { error } = await supabase
      .from("home_tuition_requests")
      .insert([data]);

    if (error) {
      alert("Error submitting form");
      console.log(error);
    } else {
      alert("Request Submitted Successfully!");
      homeForm.reset();
    }
  });
} 

const schoolForm = document.getElementById("schoolForm");

if (schoolForm) {
  schoolForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
      school_name: document.getElementById("schoolName").value,
      subject: document.getElementById("subject").value,
      location: document.getElementById("location").value,
      contact: document.getElementById("contact").value,
      details: document.getElementById("details").value,
    };

    const { error } = await supabase
      .from("school_requests")
      .insert([data]);

    if (error) {
      alert("Error submitting form");
      console.log(error);
    } else {
      alert("Request Submitted Successfully!");
      schoolForm.reset();
    }
  });
}
