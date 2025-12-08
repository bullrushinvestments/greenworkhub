import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestType';
import { LoadingSpinner } from './components/LoadingSpinner';

interface WriteTestProps {
  onCreate: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createTest] = useMutation(CREATE_TEST, {
    variables: { title, description },
    onCompleted: (data) => {
      onCreate(data.createTest);
      setTitle('');
      setDescription('');
    },
    onError: (err) => {
      setError(err.message);
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await createTest();
    setLoading(false);
  };

  return (
    <div className="p-4">
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          aria-label="Test title"
          className="p-1 border rounded focus:outline-none focus:border-blue-500"
        />
        
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          aria-label="Test description"
          className="p-1 border rounded focus:outline-none focus:border-blue-500"
        />
        
        <button type="submit" disabled={loading} className="mt-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          {loading ? <LoadingSpinner /> : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations';
import { GET_TESTS } from './graphql/queries';
import { Test } from './types/TestType';
import { LoadingSpinner } from './components/LoadingSpinner';

interface WriteTestProps {
  onCreate: (test: Test) => void;
}

const WriteTests: React.FC<WriteTestProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createTest] = useMutation(CREATE_TEST, {
    variables: { title, description },
    onCompleted: (data) => {
      onCreate(data.createTest);
      setTitle('');
      setDescription('');
    },
    onError: (err) => {
      setError(err.message);
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await createTest();
    setLoading(false);
  };

  return (
    <div className="p-4">
      {error && <p role="alert" aria-live="assertive">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          aria-label="Test title"
          className="p-1 border rounded focus:outline-none focus:border-blue-500"
        />
        
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          aria-label="Test description"
          className="p-1 border rounded focus:outline-none focus:border-blue-500"
        />
        
        <button type="submit" disabled={loading} className="mt-2 p-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          {loading ? <LoadingSpinner /> : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;