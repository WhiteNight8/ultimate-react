import { createClient } from "@supabase/supabase-js"
const supabaseUrl = "https://jgxoozuqazzcndgqmoso.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpneG9venVxYXp6Y25kZ3Ftb3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyMjMxNzAsImV4cCI6MjAzNzc5OTE3MH0.ypEKbjReDxLGxhkWhCMQ8oF5zZzpjauf09ATS1NMdiw"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
