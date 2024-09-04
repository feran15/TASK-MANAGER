import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div className="bg-[rgb(10,26,47)] p-10  text-center text-white ">
        <h2 className='mt-20 text-5xl font-bold'>More than <span className='text-red-400 '>1 million businesses </span> manage <br /> their work with E-Task Management <br /> System.</h2>
      <span>
        <p className='mt-12 font-bold text-xl'>Follow the crowd. Do yourself proud.</p>
        <button className='bg-[red] px-4 py-2 border-[none] rounded-sm mt-8 font-bold'>SIGN UP NOW</button>
        <img className='mt-12' src="/map.png" alt="" />
      </span>
      </div>
    </div>
  )
}

export default Homepage
