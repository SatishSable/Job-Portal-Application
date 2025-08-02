/*
  # Add sample jobs data

  1. Sample Data
    - Adds 10 sample jobs with varied:
      - Titles
      - Descriptions
      - Locations
      - Salary ranges
      - Required skills
      - Job types
  
  2. Note
    - All jobs are set as 'open' status
    - Uses realistic job descriptions and requirements
*/

-- Insert sample jobs
INSERT INTO jobs (title, description, requirements, salary_range, location, type, skills_required, status)
VALUES
  (
    'Senior Full Stack Developer',
    'Join our dynamic team to build scalable web applications using modern technologies. You will be responsible for both frontend and backend development, working with React, Node.js, and cloud technologies.',
    ARRAY['5+ years of experience in full-stack development', 'Strong knowledge of React and Node.js', 'Experience with cloud platforms (AWS/GCP/Azure)', 'Bachelor''s degree in Computer Science or related field'],
    '$120,000 - $160,000',
    'San Francisco, CA',
    'full-time',
    ARRAY['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    'open'
  ),
  (
    'AI/ML Engineer',
    'We are seeking an experienced AI/ML Engineer to develop and implement machine learning models for our product suite. You will work on cutting-edge AI technologies and help shape the future of our platform.',
    ARRAY['Masters/PhD in Computer Science or related field', 'Experience with PyTorch or TensorFlow', 'Strong background in mathematics and statistics', 'Published research is a plus'],
    '$140,000 - $180,000',
    'Remote',
    'remote',
    ARRAY['Python', 'PyTorch', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
    'open'
  ),
  (
    'UX/UI Designer',
    'Looking for a creative UX/UI Designer to craft beautiful and intuitive user experiences. You will work closely with product managers and developers to create engaging digital products.',
    ARRAY['3+ years of UX/UI design experience', 'Strong portfolio demonstrating user-centered design', 'Proficiency in Figma and design tools', 'Experience with design systems'],
    '$90,000 - $120,000',
    'New York, NY',
    'full-time',
    ARRAY['Figma', 'UI Design', 'UX Research', 'Prototyping', 'Design Systems'],
    'open'
  ),
  (
    'DevOps Engineer',
    'Join our infrastructure team to build and maintain our cloud-native platform. You will work with containerization, CI/CD pipelines, and infrastructure as code.',
    ARRAY['Experience with Kubernetes and Docker', 'Strong knowledge of AWS services', 'Experience with CI/CD tools', 'Infrastructure as Code experience'],
    '$130,000 - $170,000',
    'Seattle, WA',
    'full-time',
    ARRAY['Kubernetes', 'Docker', 'AWS', 'Terraform', 'CI/CD'],
    'open'
  ),
  (
    'Frontend Developer',
    'We''re looking for a Frontend Developer to create responsive and performant web applications. You will work with our design team to implement pixel-perfect interfaces.',
    ARRAY['3+ years of frontend development experience', 'Strong knowledge of React and modern JavaScript', 'Experience with state management', 'Eye for design and attention to detail'],
    '$90,000 - $130,000',
    'Austin, TX',
    'full-time',
    ARRAY['React', 'TypeScript', 'CSS', 'Redux', 'Webpack'],
    'open'
  ),
  (
    'Data Scientist',
    'Join our analytics team to derive insights from large datasets and build predictive models. You will work with stakeholders to drive data-driven decisions.',
    ARRAY['Masters in Data Science or related field', 'Experience with data visualization', 'Strong SQL skills', 'Statistical analysis experience'],
    '$115,000 - $150,000',
    'Boston, MA',
    'full-time',
    ARRAY['Python', 'SQL', 'Machine Learning', 'Data Visualization', 'Statistics'],
    'open'
  ),
  (
    'Mobile Developer (iOS)',
    'Looking for an iOS developer to build and maintain our mobile applications. You will work on feature development and performance optimization.',
    ARRAY['3+ years of iOS development', 'Experience with Swift and SwiftUI', 'Understanding of iOS design principles', 'App Store deployment experience'],
    '$100,000 - $140,000',
    'Los Angeles, CA',
    'full-time',
    ARRAY['Swift', 'iOS', 'SwiftUI', 'Xcode', 'Mobile Development'],
    'open'
  ),
  (
    'Backend Engineer',
    'Join us to build scalable backend services and APIs. You will work with microservices architecture and handle high-traffic systems.',
    ARRAY['4+ years of backend development', 'Experience with microservices', 'Strong knowledge of databases', 'API design experience'],
    '$110,000 - $150,000',
    'Chicago, IL',
    'full-time',
    ARRAY['Node.js', 'PostgreSQL', 'Microservices', 'Docker', 'REST APIs'],
    'open'
  ),
  (
    'Product Manager',
    'We''re seeking a Product Manager to lead product strategy and execution. You will work with cross-functional teams to deliver impactful features.',
    ARRAY['5+ years of product management experience', 'Technical background preferred', 'Strong analytical skills', 'Experience with Agile methodologies'],
    '$130,000 - $170,000',
    'Remote',
    'remote',
    ARRAY['Product Strategy', 'Agile', 'Data Analysis', 'User Research', 'Roadmapping'],
    'open'
  ),
  (
    'QA Engineer',
    'Looking for a QA Engineer to ensure product quality through automated and manual testing. You will develop test plans and maintain test automation frameworks.',
    ARRAY['3+ years of QA experience', 'Experience with test automation', 'Strong analytical and problem-solving skills', 'Knowledge of CI/CD pipelines'],
    '$85,000 - $120,000',
    'Denver, CO',
    'full-time',
    ARRAY['Selenium', 'Jest', 'Cypress', 'Test Automation', 'QA Methodologies'],
    'open'
  );