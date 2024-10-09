import { useState } from "react";

const QuizComponent = ({ postId }) => {
    const [quiz, setQuiz] = useState({
      question: 'What\'s the most important factor when buying a home?',
      options: [
        { id: 1, text: 'Location' },
        { id: 2, text: 'Price' },
        { id: 3, text: 'Size' },
        { id: 4, text: 'Amenities' },
      ],
    });
    const [selectedAnswer, setSelectedAnswer] = useState(null);
  
    const handleSubmit = () => {
      // Handle quiz submission logic here
    };
  
    return (
      <div className="p-4 mt-8 bg-white rounded-lg shadow">
        <h3 className="mb-4 text-xl font-semibold">{quiz.question}</h3>
        {quiz.options.map(option => (
          <div key={option.id} className="mb-2">
            <input
              type="radio"
              id={`option-${option.id}`}
              name="quiz-answer"
              value={option.id}
              checked={selectedAnswer === option.id}
              onChange={() => setSelectedAnswer(option.id)}
            />
            <label htmlFor={`option-${option.id}`} className="ml-2">{option.text}</label>
          </div>
        ))}
        <button onClick={handleSubmit} className="px-4 py-2 mt-4 text-white bg-indigo-500 rounded-lg">Submit Answer</button>
      </div>
    );
  };
  
  export default QuizComponent;
  