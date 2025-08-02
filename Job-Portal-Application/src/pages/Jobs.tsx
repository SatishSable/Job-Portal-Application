import React, { useState, useEffect } from 'react';
import { Search, Briefcase, MapPin, DollarSign } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Job } from '../types';

export function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchJobs() {
      try {
        console.log('Fetching jobs...');
        const { data, error } = await supabase
          .from('jobs')
          .select('*')
          .eq('status', 'open')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching jobs:', error);
          throw error;
        }
        
        console.log('Fetched jobs:', data);
        setJobs(data || []);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search jobs by title or description..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="text-center py-12">
          <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
          <p className="text-gray-500">Try adjusting your search terms</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span>{job.salary_range}</span>
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {job.type}
                </span>
              </div>
              <p className="mt-4 text-gray-600 line-clamp-3">{job.description}</p>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {job.skills_required.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}