import React from 'react'

export const Footer = () => {
    return (
        <div className='bottom-0 items-center'>
            <div className='flex flex-wrap items-center justify-center bg-white m-0 shadow h-20'>
                <div className='text-center w-1/2 px-4 bg-blue-500 py-4 h-full'>
                    <a href='https://goo.gl/maps/vsbv8YGUQ1Mu2URu6'><i class="fa-solid fa-map-pin"></i> 416 W Main St, Frankfort, KY 40601</a>
                </div>
                <div className='text-center w-1/2 px-4 bg-blue-500 py-4 h-full'>
                    <a href='tel:5023191671'><i class="fa-solid fa-phone"></i> (502)319-1671</a>
                </div>
            </div>
            <div className='text-center text-sm mx-auto bg-blue-500 py-2 '>
                © 2023 Weekday Community Preschool. All rights reserved.
            </div>
        </div>

    )
}