import React from 'react'

const Footer = () => {
    return (
        <div className='mt-16'>
            <div className="footer flex justify-between">
                <div className="footer-text p-10">
                    <p className='text-blue-500 font-bold text-md'>support@E-TaskManagement</p>
                </div>
                <div className="field mt-8 p-2">
                    <form action="get">
                        <input className='border-4 py-1 px-6' placeholder='Search' />
                    </form>
                </div>
            </div>
            <h6 className='text-center mt-12 text-gray-400'>@2024 E-TaskManagement</h6>
        </div>
    )
}

export default Footer
