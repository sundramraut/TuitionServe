import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient("YOUR_URL", "YOUR_KEY");

const params = new URLSearchParams(window.location.search);
const tuition_id = params.get("tuition_id");

async function makePayment() {
  const { data: userData } = await supabase.auth.getUser();

  const user = userData.user;

  // Update application as paid
  await supabase
    .from("applications")
    .update({ payment_status: "paid" })
    .eq("teacher_id", user.id)
    .eq("tuition_id", tuition_id);

  alert("Payment successful!");

  window.location.href = "index.html";
}

window.makePayment = makePayment;
