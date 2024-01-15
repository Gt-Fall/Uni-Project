import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pfrszpndyxrzwlpvjxod.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmcnN6cG5keXhyendscHZqeG9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAxNzIwNDIsImV4cCI6MTk5NTc0ODA0Mn0.MTPJaRAKNSlTZhQFlBvk50u3PpgTh0oJ4Ktbb74TzKU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
