// supabase-config.js
const SUPABASE_URL = 'https://cqvqchdcesmvueqauovq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxdnFjaGRjZXNtdnVlcWF1b3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkwMTczMjIsImV4cCI6MjEwNDU5MzMyMn0.O6L_hyC2Vux8XKsJeQl_h4QIGJrwuoRRCiKgNvi-bjQ';

// Supabase client initialization
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
