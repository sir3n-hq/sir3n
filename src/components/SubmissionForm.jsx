import React, { useState } from 'react';
import axios from 'axios';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    event: '',
    location: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Replace with your actual API endpoint
      const response = await axios.post('http://localhost:5173/submissions', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setSubmitSuccess(true);
        setFormData({
          description: '',
          event: '',
          location: '',
        });
        setTimeout(() => setSubmitSuccess(false), 3000);
      }
    } catch (error) {
      setSubmitError(error.response?.data?.message || 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="submission-form">
      {submitError && (
        <div className="error-message">
          {submitError}
        </div>
      )}
      {submitSuccess && (
        <div className="success-message">
          Submission successful! Thank you.
        </div>
      )}

      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </label>

      <label>
        Event:
        <input
          type="text"
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </label>

      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default SubmissionForm;