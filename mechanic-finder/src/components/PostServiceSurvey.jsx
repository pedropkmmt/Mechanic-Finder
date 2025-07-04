import React, { useState } from 'react';
import { Star, Send, CheckCircle } from 'lucide-react';

const PostServiceSurvey = () => {
  const [formData, setFormData] = useState({
    timeSatisfaction: 0,
    serviceQuality: 0,
    priceSatisfaction: 0,
    overallRating: 0
  });

  const [submitted, setSubmitted] = useState(false);
  const [hoveredStars, setHoveredStars] = useState({});

  const handleStarRating = (category, rating) => {
    setFormData(prev => ({
      ...prev,
      [category]: rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Survey submitted:', formData);
    setSubmitted(true);
  };

  const StarRating = ({ category, value, label }) => {
    return (
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleStarRating(category, star)}
              onMouseEnter={() => setHoveredStars(prev => ({ ...prev, [category]: star }))}
              onMouseLeave={() => setHoveredStars(prev => ({ ...prev, [category]: 0 }))}
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              <Star
                size={28}
                className={`${
                  star <= (hoveredStars[category] || value)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                } hover:text-yellow-400 transition-colors duration-150`}
              />
            </button>
          ))}
          <span className="ml-3 text-sm text-gray-600 font-medium">
            {value > 0 ? `${value}/5` : 'Rate this'}
          </span>
        </div>
      </div>
    );
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your feedback helps us improve our service.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                timeSatistaction: 0,
                serviceQuality: 0,
                priceSatisfaction: 0,
                overallRating: 0
              });
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            New Survey
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">How was your service?</h1>
        <p className="text-gray-600 text-sm">
          Please rate your experience with us today.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <StarRating
          category="timeSatisfaction"
          value={formData.overallRating}
          label="Timely Delivery of Service"
        />

        <StarRating
          category="serviceQuality"
          value={formData.serviceQuality}
          label="Service Quality"
        />

        <StarRating
          category="priceSatisfaction"
          value={formData.staffFriendliness}
          label="Price Satisfaction"
        />

        <StarRating
          category="overallRating"
          value={formData.recommendation}
          label="Overall Experience"
        />

        <button
          type="submit"
          className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-colors mt-8"
        >
          <Send size={20} className="mr-2" />
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default PostServiceSurvey;