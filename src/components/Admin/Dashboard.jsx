import React from 'react'
import { FaRegCalendarMinus } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { TbBrandBooking } from 'react-icons/tb'
const Dashboard = () => {
    return (
        <div
            className='
            pt-[25px] 
            px-[25px] 
            bg-[#FBF9FC]
            '>
            <div
                className='
                flex 
                items-center 
                justify-between
                '>
                <h1
                    className='
                    text-[#5a5c69] 
                    text-[28px] 
                    leading-[34px] 
                    font-normal
                    '>Dashboard
                </h1>
                <button
                    className='
                    bg-rose-500 
                    h-[32px] 
                    rounded-[3px] 
                    text-white 
                    flex 
                    items-center 
                    px-[30px] 
                    cursor-pointer
                    '>
                    Generate Report
                </button>
            </div>
            <div
                className='
                grid 
                grid-cols-4 
                gap-[30px] 
                mt-[20px] 
                pb-[15px]
                '>
                <div
                    className='
                    h-[100px] 
                    rounded-[8px] 
                    bg-white 
                    border-l-[4px] 
                    border-rose-500 
                    flex 
                    items-center 
                    justify-between 
                    px-[30px] 
                    cursor-pointer 
                    hover:shadow-lg 
                    transform hover:scale-[103%] 
                    transition  
                    duration-300 
                    ease-out
                    '>
                    <div>
                        <h2
                            className='
                            text-rose-500 
                            text-[12px] 
                            leading-[17px] 
                            font-bold
                            '>
                            EARNINGS (monthly)
                        </h2>
                        <h1
                            className='
                            text-[20px] 
                            leading-[24px] 
                            font-bold 
                            text-[#5a5c69] 
                            mt-[5px]
                            '>
                            200000/-
                        </h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div>
                <div
                    className='
                    h-[100px] 
                    rounded-[8px] 
                    bg-white 
                    border-l-[4px] 
                    border-[#1cc88a] 
                    flex 
                    items-center 
                    justify-between 
                    px-[30px] 
                    cursor-pointer 
                    hover:shadow-lg 
                    transform hover:scale-[103%] 
                    transition  
                    duration-300 
                    ease-out
                    '>
                    <div>
                        <h2
                            className='
                            text-[#1cc88a] 
                            text-[12px] 
                            leading-[17px] 
                            font-bold
                            '>
                            EARNINGS (annual)
                        </h2>
                        <h1
                            className='
                            text-[20px] 
                            leading-[24px] 
                            font-bold 
                            text-[#5a5c69] 
                            mt-[5px]
                            '>
                            5000000/-
                        </h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div>
                <div
                    className='
                    h-[100px] 
                    rounded-[8px] 
                    bg-white 
                    border-l-[4px] 
                    border-rose-500
                    flex 
                    items-center 
                    justify-between 
                    px-[30px] 
                    cursor-pointer 
                    hover:shadow-lg 
                    transform hover:scale-[103%] 
                    transition  
                    duration-300 
                    ease-out
                    '>
                    <div>
                        <h2
                            className='
                            text-rose-500 
                            text-[12px] 
                            leading-[17px] 
                            font-bold
                            '>
                            TOTAL USERS
                        </h2>
                        <h1
                            className='
                            text-[20px] 
                            leading-[24px] 
                            font-bold 
                            text-[#5a5c69] 
                            mt-[5px]
                            '>
                            200
                        </h1>
                    </div>
                    <FiUsers fontSize={28} />
                </div>
                <div
                    className='
                    h-[100px] 
                    rounded-[8px] 
                    bg-white 
                    border-l-[4px] 
                    border-[#1cc88a]
                    flex 
                    items-center 
                    justify-between 
                    px-[30px] 
                    cursor-pointer 
                    hover:shadow-lg 
                    transform hover:scale-[103%] 
                    transition  
                    duration-300 
                    ease-out
                    '>
                    <div>
                        <h2
                            className='
                            text-[#1cc88a]
                            text-[12px] 
                            leading-[17px] 
                            font-bold
                            '>
                            TOATAL BOOKINGS
                        </h2>
                        <h1
                            className='
                            text-[20px] 
                            leading-[24px] 
                            font-bold 
                            text-[#5a5c69] 
                            mt-[5px]
                            '>
                            2000
                        </h1>
                    </div>
                    <TbBrandBooking fontSize={28} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard