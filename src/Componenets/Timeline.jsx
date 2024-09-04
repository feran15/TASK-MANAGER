import React from 'react'

const Timeline = () => {
  return (
    <div>
      <div className='p-12' style={{display:'flex'}}>
                <div className='mt-' style={{marginLeft:'10rem'}}>
                <img style={{width:'200%', boxShadow:'0px 0px 5px  1px',marginLeft:'-70px'}} src="/track.webp" alt="" />
                <img className='absolute'style={{width:'30%', marginTop:'-5px', boxShadow:'0px 0px 5px  1px', marginLeft:'-150px'}} src="/Track2.webp" alt="" />
                </div>
            <div className='font-bold p-16 mt-4' style={{width:'150%',marginLeft:'340px'}}>
                    <p className='text-red-700 '>FINISH ON TIME</p>
                    <h3 className='text-black text text-4xl'>Organize your projects</h3>
                    <p className='mt-8'>Break down complex projects into milestones, task <br /> lists, tasks, and sub tasks to manage them more <br /> efficiently. Assign tasks to your team and track their <br /> progress to ensure you finish on time.</p>
                </div>
            </div>
    </div>
  )
}

export default Timeline
