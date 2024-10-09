
// AuthorProfile.jsx
import React from 'react';

const AuthorProfile = ({ author }) => {
  return (
    <div className="flex items-center p-4 mt-8 bg-white rounded-lg shadow">
      <img src={author.avatar} alt={author.name} className="w-16 h-16 mr-4 rounded-full" />
      <div>
        <h3 className="text-xl font-semibold">{author.name}</h3>
        <p className="text-gray-600">{author.bio}</p>
      </div>
    </div>
  );
};

export default AuthorProfile;