import React from 'react';

const Profile = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <p>Email: user@example.com</p>
        {/* Add more profile details or settings as needed */}
        <button
          onClick={onClose}
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
};

export default Profile;
