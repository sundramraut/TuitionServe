// Replace with your real values
const SUPABASE_URL = "https://yqiyactejxnauwvlbfpm.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxaXlhY3RlanhuYXV3dmxiZnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNjIyMjcsImV4cCI6MjA5MTkzODIyN30.BlTEkkFhMxhzZitJUIDnGFyCf0sNDApnY9y31IWjIig";

// Load Supabase
const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
