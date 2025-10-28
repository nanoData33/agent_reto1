import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = "https://aczjgeleupwlvghjhkav.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjempnZWxldXB3bHZnaGpoa2F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NzgwODMsImV4cCI6MjA3NjU1NDA4M30.-hQdLNDMw-i4vCpt_OXnzYss5MtVrCu76FhMCPcZPhM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
