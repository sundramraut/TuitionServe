// SIGNUP
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
    } else {
      // Save extra data in teachers table
      await supabase.from("teachers").insert([
        {
          id: data.user.id,
          email: email,
          name: name,
        },
      ]);

      alert("Signup successful! Check your email.");
      window.location.href = "login.html";
    }
  });
}


// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert("Login failed");
    } else {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    }
  });
}

async function logout() {
  await supabase.auth.signOut();
  window.location.href = "login.html";
}
