import React, { useState, useEffect } from 'react';
import { User as LucideUser, Mail, MapPin, Building2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { User } from '../types';

export function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('No user found');

        const { data, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-12">
        <LucideUser className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900">Profile not found</h3>
        <p className="text-gray-500">Please complete your profile setup</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-600 h-32"></div>
        <div className="px-6 py-4 -mt-16">
          <div className="flex items-end space-x-4">
            {profile.avatar_url ? (
              <img
                src={profile.avatar_url}
                alt={profile.full_name}
                className="h-24 w-24 rounded-full border-4 border-white bg-white"
              />
            ) : (
              <div className="h-24 w-24 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center">
                <LucideUser className="h-12 w-12 text-gray-400" />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{profile.full_name}</h1>
              <p className="text-gray-600">{profile.role}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>{profile.email}</span>
              </div>
              {profile.location && (
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}