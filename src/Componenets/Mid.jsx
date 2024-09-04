import React from 'react'

const mid = () => {
    return (
        <div>
            <main className='bg-[rgb(246,245,241)] p-20'style={{display:'flex'}}>
                <div className='font-bold p-16' style={{width:'150%'}}>
                    <p className='text-red-700 '>NOTHING SLIPS</p>
                    <h3 className='text-black text text-4xl'>Manage your timeline</h3>
                    <p className='mt-8'>Create dependencies between related tasks to make <br /> sure they're completed in a particular order. Do certain <br /> tasks repeat from time to time? Set up a recurring task <br /> to repeat at the desired intervals and add reminders so <br /> nothing slips your mind!</p>
                </div>
                <div className='' style={{marginLeft:'10rem',marginTop:'-30px'}}>
                <img style={{width:'100%', boxShadow:'0px 0px 5px  1px',marginLeft:'-60px'}} src="/Organize.webp" alt="" />
                <img className='absolute'style={{width:'30%', marginTop:'-5px', boxShadow:'0px 0px 5px  1px', marginLeft:'-150px'}} src="/Projects.webp" alt="" />
                </div>
            </main>
            
          
            </div>
    )
}

export default mid
