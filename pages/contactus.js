import React from 'react';

const Form = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-blur-lg bg-center bg-gray-300">
      <form className="bg-white w-96 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-black">Contact Us</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-gray-900"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500  text-gray-900"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="queryType" className="block text-gray-700 font-medium mb-2">
            Type of Query
          </label>
          <select
            id="queryType"
            name="queryType"
            className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500  text-gray-900"
          >
            <option value="billing">Billing related</option>
            <option value="api">API Functionality related</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="query" className="block text-gray-700 font-medium mb-2">
            Write Your Query
          </label>
          <textarea
            id="query"
            name="query"
            rows="4"
            placeholder="Your Query"
            className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500  text-gray-900"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md w-full font-medium hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
