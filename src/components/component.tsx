import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specifications, setSpecifications] = useState<BusinessSpecification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecifications = async () => {
      try {
        const response = await axios.get<{ data: BusinessSpecification[] }>('/api/business-specifications');
        setSpecifications(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specifications.');
        setLoading(false);
      }
    };

    fetchSpecifications();
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={clsx('p-4', 'bg-white', 'rounded-lg', 'shadow-md', { 'text-sm': isMobile, 'text-base': !isMobile })}>
      <h2 className="mb-4 text-xl font-bold">Business Specifications</h2>
      {loading && (
        <div role="status" aria-busy={true} aria-label="Loading business specifications...">
          <p>Loading...</p>
        </div>
      )}
      {!loading && error ? (
        <div role="alert">
          <p>{error}</p>
        </div>
      ) : (
        <ul className="list-inside list-disc space-y-2">
          {specifications.map((spec) => (
            <li key={spec.id} tabIndex={0} onKeyDown={(e) => e.preventDefault()} role="button" onClick={() => console.log(`Clicked on ${spec.name}`)}>
              <div className="flex items-center justify-between">
                <span>{spec.description}</span>
                <span className="text-blue-600 hover:underline cursor-pointer">{spec.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [specifications, setSpecifications] = useState<BusinessSpecification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpecifications = async () => {
      try {
        const response = await axios.get<{ data: BusinessSpecification[] }>('/api/business-specifications');
        setSpecifications(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load business specifications.');
        setLoading(false);
      }
    };

    fetchSpecifications();
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={clsx('p-4', 'bg-white', 'rounded-lg', 'shadow-md', { 'text-sm': isMobile, 'text-base': !isMobile })}>
      <h2 className="mb-4 text-xl font-bold">Business Specifications</h2>
      {loading && (
        <div role="status" aria-busy={true} aria-label="Loading business specifications...">
          <p>Loading...</p>
        </div>
      )}
      {!loading && error ? (
        <div role="alert">
          <p>{error}</p>
        </div>
      ) : (
        <ul className="list-inside list-disc space-y-2">
          {specifications.map((spec) => (
            <li key={spec.id} tabIndex={0} onKeyDown={(e) => e.preventDefault()} role="button" onClick={() => console.log(`Clicked on ${spec.name}`)}>
              <div className="flex items-center justify-between">
                <span>{spec.description}</span>
                <span className="text-blue-600 hover:underline cursor-pointer">{spec.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CreateBusinessSpecification;