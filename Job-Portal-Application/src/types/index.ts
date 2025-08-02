export interface User {
  id: string;
  email: string;
  role: 'jobseeker' | 'employer';
  created_at: string;
  full_name?: string;
  avatar_url?: string;
}

export interface Job {
  id: string;
  title: string;
  company_id: string;
  description: string;
  requirements: string[];
  salary_range: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  created_at: string;
  status: 'open' | 'closed';
  skills_required: string[];
}

export interface Application {
  id: string;
  job_id: string;
  user_id: string;
  status: 'pending' | 'reviewing' | 'interview' | 'rejected' | 'accepted';
  created_at: string;
  resume_url: string;
  cover_letter?: string;
}