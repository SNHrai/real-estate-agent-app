// UserAccountCreation.jsx
import React, { useState } from 'react';

const avatars = ['/avatars/1.png', '/avatars/2.png', '/avatars/3.png', '/avatars/4.png'];

const UserAccountCreation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle account creation logic here
  };

  return (
    <div className="p-4 mt-8 bg-white rounded-lg shadow">
      <h3 className="mb-4 text-2xl font-semibold">Create an Account</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname (optional)"
          className="w-full p-2 mb-2 border rounded"
        />
        <div className="mb-4">
          <p className="mb-2">Select an avatar:</p>
          <div className="flex space-x-2">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className={`w-12 h-12 rounded-full cursor-pointer ${selectedAvatar === avatar ? 'border-4 border-indigo-500' : ''}`}
                onClick={() => setSelectedAvatar(avatar)}
              />
            ))}
          </div>
        </div>
        <button type="submit" className="px-4 py-2 text-white bg-indigo-500 rounded-lg">Create Account</button>
      </form>
    </div>
  );
};

export default UserAccountCreation;