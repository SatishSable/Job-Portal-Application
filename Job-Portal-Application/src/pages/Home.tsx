import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, Users, Brain } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-900">
          Find Your Dream Job with AI-Powered Matching
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our advanced AI technology matches you with the perfect job opportunities based on your skills,
          experience, and career goals.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/jobs"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 text-lg"
          >
            Find Jobs
          </Link>
          <Link
            to="/auth"
            className="bg-white text-blue-600 px-8 py-3 rounded-md border-2 border-blue-600 hover:bg-blue-50 text-lg"
          >
            Post a Job
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Job Matching</h3>
          <p className="text-gray-600">
            AI-powered algorithm matches you with relevant job opportunities based on your profile.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Top Companies</h3>
          <p className="text-gray-600">
            Connect with leading companies looking for talent like you.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
          <p className="text-gray-600">
            Get personalized career advice and skill recommendations.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 -mx-4 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Join Thousands of Successful Job Seekers</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">10k+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">5k+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50k+</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}