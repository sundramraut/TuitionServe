import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "YOUR_SUPABASE_URL",
  "YOUR_SUPABASE_ANON_KEY"
);

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    class: document.getElementById("class").value,
    location: document.getElementById("location").value,
    description: document.getElementById("desc").value
  };

  const { error } = await supabase.from("parent_leads").insert([data]);

  if (!error) {
    alert("Submitted!");
  } else {
    alert("Error!");
  }
});

async function loadJobs() {
  const { data, error } = await supabase
    .from("tuition_posts")
    .select("*")
    .eq("status", "open");

  const container = document.getElementById("jobs");
  container.innerHTML = "";

  data.forEach(job => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${job.subject} - Class ${job.class}</h3>
      <p>${job.description}</p>
      <p>Budget: ${job.budget}</p>
      <button onclick="applyJob('${job.id}')">Apply</button>
      <hr/>
    `;

    container.appendChild(div);
  });
}
loadJobs();
window.applyJob = async (tuition_id) => {
  alert("Next step: login + payment");
};

window.signUp = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (!error) alert("Check your email!");
};

window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (!error) {
    alert("Logged in!");
    loadJobs();
  }
};

let currentUser = null;

async function checkUser() {
  const { data } = await supabase.auth.getUser();
  currentUser = data.user;
}

checkUser();

window.applyJob = async (tuition_id) => {
  if (!currentUser) {
    alert("Please login first");
    return;
  }

  const { error } = await supabase
    .from("applications")
    .insert([
      {
        teacher_id: currentUser.id,
        tuition_id: tuition_id
      }
    ]);

  if (!error) {
    alert("Application submitted! Now proceed to payment.");
  } else {
    alert("Already applied or error");
  }
};
