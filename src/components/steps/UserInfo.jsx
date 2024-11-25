import React, { useState } from 'react';

function UserInfo({ onNext, theme }) {
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

  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const inputBG = theme === 'dark' ? 'bg-zinc-900' : 'bg-white';

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Basic Information</h2>
      <form onSubmit={handleSubmit} className='max-w-xl mx-auto'>
        <div className="mb-4">
          <label className={`block mb-2 ${textColor}`}>Name</label>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className={`${inputBG} ${textColor} outline-none w-full border-4 p-2 duration-500 border-black focus:border-violet-700 relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10`}
            required
          />
        </div>
        <div className="mb-4">
          <label className={`block mb-2 ${textColor}`}>Email</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            className={`${inputBG} ${textColor} outline-none w-full border-4 p-2 duration-500 border-black focus:border-violet-700 relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10`}
            required
          />
        </div>
        <div className="mb-6">
          <label className={`block mb-2 ${textColor}`}>Phone</label>
          <input
            type="tel"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            className={`${inputBG} ${textColor} outline-none w-full border-4 p-2 duration-500 border-black focus:border-violet-700 relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10`}
            required
          />
        </div>
        <div className="mb-6">
          <label className={`block mb-2 ${textColor}`}>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={userInfo.dob}
            onChange={handleChange}
            placeholder='Date of Birth'
            className={`${inputBG} ${textColor} outline-none w-full border-4 p-2 duration-500 border-black focus:border-violet-700 relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10`}
            required
          />
          {/* <span
            class="pl-2 duration-500 opacity-0 peer-focus:opacity-100 text-white -translate-y-5 peer-focus:translate-y-0"
            >Date of Birth</span> */}
        </div>
        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    </div>
  );
}

export default UserInfo;

