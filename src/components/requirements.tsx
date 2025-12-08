import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setRequirements } from './features/requirementsSlice'; // Assuming a Redux store for state management

interface Requirement {
  id: number;
  name: string;
  description: string;
  status: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
        setRequirements(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch requirements:", err);
        setError("An error occurred while fetching the requirements.");
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleRequirementChange = (id: number, status: boolean) => {
    setRequirements(prevRequirements =>
      prevRequirements.map(requirement =>
        requirement.id === id ? { ...requirement, status } : requirement
      )
    );
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <div className="p-6 flex flex-col gap-4">
      {requirements.map(requirement => (
        <div key={requirement.id} className="flex items-center justify-between">
          <label htmlFor={`req-${requirement.id}`} className="text-lg font-semibold">{requirement.name}</label>
          <input
            id={`req-${requirement.id}`}
            type="checkbox"
            checked={requirement.status}
            onChange={() => handleRequirementChange(requirement.id, !requirement.status)}
            aria-label={`${requirement.name} requirement`}
            className="ml-2 focus:ring-blue-500 h-4 w-4 rounded border-gray-300 text-blue-600"
          />
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setRequirements } from './features/requirementsSlice'; // Assuming a Redux store for state management

interface Requirement {
  id: number;
  name: string;
  description: string;
  status: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
        setRequirements(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch requirements:", err);
        setError("An error occurred while fetching the requirements.");
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  const handleRequirementChange = (id: number, status: boolean) => {
    setRequirements(prevRequirements =>
      prevRequirements.map(requirement =>
        requirement.id === id ? { ...requirement, status } : requirement
      )
    );
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div role="alert" aria-live="assertive">{error}</div>;

  return (
    <div className="p-6 flex flex-col gap-4">
      {requirements.map(requirement => (
        <div key={requirement.id} className="flex items-center justify-between">
          <label htmlFor={`req-${requirement.id}`} className="text-lg font-semibold">{requirement.name}</label>
          <input
            id={`req-${requirement.id}`}
            type="checkbox"
            checked={requirement.status}
            onChange={() => handleRequirementChange(requirement.id, !requirement.status)}
            aria-label={`${requirement.name} requirement`}
            className="ml-2 focus:ring-blue-500 h-4 w-4 rounded border-gray-300 text-blue-600"
          />
        </div>
      ))}
    </div>
  );
};

export default GatherRequirements;