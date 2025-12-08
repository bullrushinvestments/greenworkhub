import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface IRequirement {
  title: string;
  description?: string;
  isRequired: boolean;
}

interface IRequirementsForm {
  requirements: IRequirement[];
}

const RequirementsFormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const RequirementInput = tw.input`w-full px-4 py-2 mb-3 border rounded-lg focus:border-blue-500 focus:outline-none`;
const DescriptionTextArea = tw.textarea`w-full px-4 py-2 mb-3 border rounded-lg focus:border-blue-500 focus:outline-none`;

const RequirementForm: React.FC<IRequirementsForm> = ({ requirements }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRequirement>();
  const [newRequirement, setNewRequirement] = useState<IRequirement>({ title: '', description: '', isRequired: false });

  const onSubmit: SubmitHandler<IRequirement> = (data) => {
    console.log(data);
    // Here you would typically send the data to a server or update state
    reset();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRequirement({ ...newRequirement, [e.target.name]: e.target.value });
  };

  return (
    <RequirementsFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Requirement Title
        </label>
        <RequirementInput
          type="text"
          id="title"
          name="title"
          placeholder="Enter requirement title"
          {...register('title', { required: 'Title is required' })}
          onChange={handleInputChange}
        />
        {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>}

        <label htmlFor="description" className="block mt-2 text-sm font-medium text-gray-700">
          Description
        </label>
        <DescriptionTextArea
          id="description"
          name="description"
          placeholder="Enter requirement description (optional)"
          {...register('description')}
          onChange={handleInputChange}
        />

        <div className="mt-4 flex items-center justify-between">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Add Requirement
          </button>
          {/* Additional buttons or elements can be added here */}
        </div>

        {requirements.map((req, index) => (
          <div key={index} className="mt-4 border-t pt-2">
            <p>{req.title}</p>
            <p>{req.description || 'No description provided'}</p>
            {/* Additional details or actions for each requirement can be added here */}
          </div>
        ))}
      </form>
    </RequirementsFormContainer>
  );
};

export default RequirementForm;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

interface IRequirement {
  title: string;
  description?: string;
  isRequired: boolean;
}

interface IRequirementsForm {
  requirements: IRequirement[];
}

const RequirementsFormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const RequirementInput = tw.input`w-full px-4 py-2 mb-3 border rounded-lg focus:border-blue-500 focus:outline-none`;
const DescriptionTextArea = tw.textarea`w-full px-4 py-2 mb-3 border rounded-lg focus:border-blue-500 focus:outline-none`;

const RequirementForm: React.FC<IRequirementsForm> = ({ requirements }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IRequirement>();
  const [newRequirement, setNewRequirement] = useState<IRequirement>({ title: '', description: '', isRequired: false });

  const onSubmit: SubmitHandler<IRequirement> = (data) => {
    console.log(data);
    // Here you would typically send the data to a server or update state
    reset();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewRequirement({ ...newRequirement, [e.target.name]: e.target.value });
  };

  return (
    <RequirementsFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Requirement Title
        </label>
        <RequirementInput
          type="text"
          id="title"
          name="title"
          placeholder="Enter requirement title"
          {...register('title', { required: 'Title is required' })}
          onChange={handleInputChange}
        />
        {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>}

        <label htmlFor="description" className="block mt-2 text-sm font-medium text-gray-700">
          Description
        </label>
        <DescriptionTextArea
          id="description"
          name="description"
          placeholder="Enter requirement description (optional)"
          {...register('description')}
          onChange={handleInputChange}
        />

        <div className="mt-4 flex items-center justify-between">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Add Requirement
          </button>
          {/* Additional buttons or elements can be added here */}
        </div>

        {requirements.map((req, index) => (
          <div key={index} className="mt-4 border-t pt-2">
            <p>{req.title}</p>
            <p>{req.description || 'No description provided'}</p>
            {/* Additional details or actions for each requirement can be added here */}
          </div>
        ))}
      </form>
    </RequirementsFormContainer>
  );
};

export default RequirementForm;