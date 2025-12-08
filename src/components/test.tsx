import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestimonialFormInputs {
  name: string;
  email: string;
  message: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialFormInputs>();

  const onSubmit: SubmitHandler<TestimonialFormInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/testimonials', data);
      reset();
    } catch (err) {
      setError('An error occurred while submitting your testimonial.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 mx-auto max-w-screen-md bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="mb-6 text-xl font-bold">Write a Testimonial</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'This field is required' })}
            className={`w-full px-3 py-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'This field is required' })}
            className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'This field is required' })}
            rows={5}
            className={`w-full px-3 py-2 border rounded ${errors.message ? 'border-red-500' : ''}`}
          />
        </div>
        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface TestimonialFormInputs {
  name: string;
  email: string;
  message: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialFormInputs>();

  const onSubmit: SubmitHandler<TestimonialFormInputs> = async (data) => {
    try {
      setLoading(true);
      await axios.post('/api/testimonials', data);
      reset();
    } catch (err) {
      setError('An error occurred while submitting your testimonial.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 mx-auto max-w-screen-md bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="mb-6 text-xl font-bold">Write a Testimonial</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'This field is required' })}
            className={`w-full px-3 py-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'This field is required' })}
            className={`w-full px-3 py-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'This field is required' })}
            rows={5}
            className={`w-full px-3 py-2 border rounded ${errors.message ? 'border-red-500' : ''}`}
          />
        </div>
        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;