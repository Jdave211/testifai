import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://qeaygdxjjfltwxsvyhyk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlYXlnZHhqamZsdHd4c3Z5aHlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NzY3ODgsImV4cCI6MjAyNTE1Mjc4OH0.jGrKKqTQEQvsxe6A1s7RsDTnvC_Q2hX4ItVNKZvEGxY')