import React, { useState } from 'react';

function UserInfo({ onNext }) {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(userInfo);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={userInfo.dob}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    </div>
  );
}

export default UserInfo;

