import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = "https://qoknmumhuqkdnpogvqbc.supabase.co";  // tu nuevo Project URL
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFva25tdW1odXFrZG5wb2d2cWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNDYyMDMsImV4cCI6MjA3NjgyMjIwM30.XKTM4wRqqSP-StGB9uL75BLvhesQ6VfA2jxK8ces5uI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
