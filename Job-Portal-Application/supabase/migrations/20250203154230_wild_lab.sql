/*
  # Initial Schema for AI Job Portal

  1. New Tables
    - users (extends auth.users)
      - profile information for both job seekers and employers
    - jobs
      - job listings with detailed information
    - applications
      - job applications with status tracking
    - skills
      - skill taxonomy for matching
    - user_skills
      - many-to-many relationship between users and skills

  2. Security
    - RLS policies for all tables
    - Separate policies for job seekers and employers
*/

-- Create custom types
CREATE TYPE user_role AS ENUM ('jobseeker', 'employer');
CREATE TYPE job_type AS ENUM ('full-time', 'part-time', 'contract', 'remote');
CREATE TYPE application_status AS ENUM ('pending', 'reviewing', 'interview', 'rejected', 'accepted');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  role user_role NOT NULL,
  full_name text,
  avatar_url text,
  bio text,
  location text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  company_id uuid REFERENCES users(id),
  description text NOT NULL,
  requirements text[] NOT NULL DEFAULT '{}',
  salary_range text,
  location text,
  type job_type NOT NULL,
  skills_required text[] NOT NULL DEFAULT '{}',
  status text NOT NULL DEFAULT 'open',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create applications table
CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES jobs(id),
  user_id uuid REFERENCES users(id),
  status application_status NOT NULL DEFAULT 'pending',
  resume_url text NOT NULL,
  cover_letter text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  category text,
  created_at timestamptz DEFAULT now()
);

-- Create user_skills table
CREATE TABLE IF NOT EXISTS user_skills (
  user_id uuid REFERENCES users(id),
  skill_id uuid REFERENCES skills(id),
  proficiency_level int CHECK (proficiency_level BETWEEN 1 AND 5),
  created_at timestamptz DEFAULT now(),
  PRIMARY KEY (user_id, skill_id)
);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_skills ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Users can read their own data
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  USING (auth.uid() = id);

-- Users can update their own data
CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  USING (auth.uid() = id);

-- Jobs are readable by all authenticated users
CREATE POLICY "Jobs are readable by all users"
  ON jobs
  FOR SELECT
  TO authenticated
  USING (true);

-- Only employers can create jobs
CREATE POLICY "Employers can create jobs"
  ON jobs
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.role = 'employer'
    )
  );

-- Applications are readable by the applicant and the job poster
CREATE POLICY "Applications are readable by relevant parties"
  ON applications
  FOR SELECT
  TO authenticated
  USING (
    auth.uid() = user_id OR 
    EXISTS (
      SELECT 1 FROM jobs
      WHERE jobs.id = applications.job_id
      AND jobs.company_id = auth.uid()
    )
  );

-- Job seekers can create applications
CREATE POLICY "Job seekers can create applications"
  ON applications
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.role = 'jobseeker'
    )
  );

-- Skills are readable by all
CREATE POLICY "Skills are readable by all"
  ON skills
  FOR SELECT
  TO authenticated
  USING (true);

-- Users can manage their own skills
CREATE POLICY "Users can manage their skills"
  ON user_skills
  TO authenticated
  USING (auth.uid() = user_id);