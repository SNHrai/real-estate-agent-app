// PollComponent.jsx
import React, { useState } from 'react';

const PollComponent = ({ postId }) => {
  const [poll, setPoll] = useState({
    question: 'What\'s your preferred home type?',
    options: [
      { id: 1, text: 'Apartment', votes: 10 },
      { id: 2, text: 'House', votes: 15 },
      { id: 3, text: 'Townhouse', votes: 5 },
    ],
  });

  const handleVote = (optionId) => {
    // Handle voting logic here
  };

  return (
    <div className="p-4 mt-8 bg-white rounded-lg shadow">
      <h3 className="mb-4 text-xl font-semibold">{poll.question}</h3>
      {poll.options.map(option => (
        <button
          key={option.id}
          onClick={() => handleVote(option.id)}
          className="w-full p-2 mb-2 text-left bg-gray-100 rounded hover:bg-gray-200"
        >
          {option.text} ({option.votes} votes)
        </button>
      ))}
    </div>
  );
};

export default PollComponent;