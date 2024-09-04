import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-text p-10">
                    <p className='text-blue-500 font-bold text-md'>support@E-TaskManagement</p>
                    <div class="app-play-store apps-download-links-wrap mobile"><a class="app-store" href="https://itunes.apple.com/in/app/zoho-projects/id511887920?mt=8" target="_blank" aria-label="Go to the App Store" rel="noopener"></a><a class="g-play" 
                    href="https://play.google.com/store/apps/details?id=com.zoho.projects&amp;hl=en_IN" target="_blank" aria-label="Go to the Play Store" rel="noopener"></a></div>
                </div>
                <div className="border-bottom border-1 mt-2" style={{ border: '1px solid gray' }}></div>
            </div>
        </div>
    )
}

export default Footer
