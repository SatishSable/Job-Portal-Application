import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, User, Search } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function Navigation() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">AI Job Portal</span>
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to="/jobs"
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
            >
              <Search className="h-5 w-5" />
              <span>Jobs</span>
            </Link>

            {user ? (
              <Link
                to="/profile"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
              >
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
