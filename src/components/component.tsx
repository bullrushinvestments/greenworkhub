import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    id: 0,
    name: '',
    description: '',
    features: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessSpec({
      ...businessSpec,
      [event.target.name]: event.target.value,
    });
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBusinessSpec({
      ...businessSpec,
      description: event.target.value,
    });
  };

  const addFeature = () => {
    if (!businessSpec.features.includes(businessSpec.name)) {
      setBusinessSpec({
        ...businessSpec,
        features: [...businessSpec.features, businessSpec.name],
        name: '',
      });
    }
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = businessSpec.features.filter((_, i) => i !== index);
    setBusinessSpec({ ...businessSpec, features: updatedFeatures });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-spec', businessSpec);
    } catch (err) {
      setError('Failed to create business specification.');
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4">
      {error && <p className="text-red-500">{error}</p>}
      <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={businessSpec.name}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <label htmlFor="description" className="block mb-1 mt-4 text-sm font-medium text-gray-900">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        value={businessSpec.description}
        onChange={handleTextAreaChange}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
      <div className="mt-4">
        {businessSpec.features.map((feature, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="mr-2">{feature}</span>
            <button
              type="button"
              onClick={() => removeFeature(index)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        id="add-feature"
        value={businessSpec.name}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
      />
      <button
        type="button"
        onClick={addFeature}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Feature
      </button>
      <div className="flex items-center justify-between mt-4">
        {loading ? (
          <span>Loading...</span>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateBusinessSpecification;

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

interface BusinessSpec {
  id: number;
  name: string;
  description: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    id: 0,
    name: '',
    description: '',
    features: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessSpec({
      ...businessSpec,
      [event.target.name]: event.target.value,
    });
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBusinessSpec({
      ...businessSpec,
      description: event.target.value,
    });
  };

  const addFeature = () => {
    if (!businessSpec.features.includes(businessSpec.name)) {
      setBusinessSpec({
        ...businessSpec,
        features: [...businessSpec.features, businessSpec.name],
        name: '',
      });
    }
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = businessSpec.features.filter((_, i) => i !== index);
    setBusinessSpec({ ...businessSpec, features: updatedFeatures });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/business-spec', businessSpec);
    } catch (err) {
      setError('Failed to create business specification.');
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:p-4">
      {error && <p className="text-red-500">{error}</p>}
      <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={businessSpec.name}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
      <label htmlFor="description" className="block mb-1 mt-4 text-sm font-medium text-gray-900">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        value={businessSpec.description}
        onChange={handleTextAreaChange}
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      ></textarea>
      <div className="mt-4">
        {businessSpec.features.map((feature, index) => (
          <div key={index} className="flex items-center mb-2">
            <span className="mr-2">{feature}</span>
            <button
              type="button"
              onClick={() => removeFeature(index)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        id="add-feature"
        value={businessSpec.name}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
      />
      <button
        type="button"
        onClick={addFeature}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Feature
      </button>
      <div className="flex items-center justify-between mt-4">
        {loading ? (
          <span>Loading...</span>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateBusinessSpecification;