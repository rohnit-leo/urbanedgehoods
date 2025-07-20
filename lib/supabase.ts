import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://kxmwrdbuigrjvdexbvey.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4bXdyZGJ1aWdyanZkZXhidmV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMwMjEzMjIsImV4cCI6MjA2ODU5NzMyMn0.2JAkq4kzvUONxOoyk099P7D0FR_5I7dJLnJFh3wVv3o"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Also export the createClient function for compatibility
export { createClient }
