import React from 'react'

const Register = () => {
  return (
      <div className="bg-[#0A1A2F] w-50 p-3 border-rounded-md">
        <h3 className='p-8 text-white font-bold text-2xl'>E-TaskManagement</h3>
      <div className='w-[40%] py-[20px] bg-neutral-200  mx-auto mt-[5%]'>
      <div className="p-4 ">
        <h2 className="font-bold text-[2.5rem] text-black">Welcome!!!</h2>
        <p className="text-lg text-gray-400 font-bold">
          Lets's get started
        </p>
      </div>
      <form>
      <div className="p-4">
          <label htmlFor="name" className="text-lg font-bold">
            FirstName
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your FirstName"
          />
        </div>
        <div className="p-4">
          <label htmlFor="name" className="text-lg font-bold">
            Last Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your Last Name"
          />
        </div>
        <div className="p-4">
          <label htmlFor="email" className="text-lg font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="p-4 relative">
          <label htmlFor="password" className="text-lg font-bold">
            Password
          </label>
          <input
            name="password"
            id="password"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
            type='password'
          />
          <span className="absolute bottom-[30px] right-[30px]">
          </span>
        </div>
        <div className="p-4">
          <button className="w-full p-2 text-xl bg-[#0A1A2F] text-white font-bold rounded-md hover:text-2xl">
            Login
          </button>
        </div>
      </form>
      </div>
      <div className="img-overlay">
        <img src="/map.png" alt="" />
      </div>
    </div>
  )
}

export default Register
