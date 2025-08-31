import { createClient } from '@supabase/supabase-js';

// Substitua esses valores pelos dados reais do seu projeto
const SUPABASE_URL = 'https://svqdqgtdxfdfpnjtmids.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2cWRxZ3RkeGZkZnBuanRtaWRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMTU0MzQsImV4cCI6MjA0NzU5MTQzNH0.LZ8ZJ9hSUk3FlChsrajyJG0afZI5fRWlLA9IzjnoWi8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
