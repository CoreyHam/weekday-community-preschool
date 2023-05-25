import React from 'react'

export const Footer = () => {
    return (
        // <div className='footer bg-red-500'>
        //     <div className='footer__container flex bg-blue-500'>
        //         <div className='footer__container__left bg-green-500'>
        //             <div className='footer__container__left__text bg-purple-500'>
        //                 <p>© 2023 Weekday Community Preschool. All rights reserved.</p>
        //             </div>
        //         </div>
        //         <div className='footer__container__right bg-red-500'>
        //             <div className='footer__container__right__links'>
        //                 <a href='https://www.facebook.com/Weekday-Community-Preschool-147857328632248' rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='absolute bottom-0 min-w-full items-center'>
            <div className='flex flex-wrap items-center justify-center bg-white m-0 shadow'>
                <div className='text-center w-1/2 px-4 bg-blue-500 py-4'>
                    <a href='https://goo.gl/maps/vsbv8YGUQ1Mu2URu6'><i class="fa-solid fa-map-pin"></i> 416 W Main St, Frankfort, KY 40601</a>
                </div>
                <div className='text-center w-1/2 px-4 bg-blue-500 py-4'>
                    <a href='tel:5023191671'><i class="fa-solid fa-phone"></i> (502)319-1671</a>
                </div>
            </div>
            <div className='text-center text-sm mx-auto bg-blue-500'>
                © 2023 Weekday Community Preschool. All rights reserved.
            </div>
        </div>

    )
}