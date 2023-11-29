import React, { useEffect, useState } from 'react'
import { FiUsers } from 'react-icons/fi'
import { TbBrandBooking, TbReport } from 'react-icons/tb'
import { IoHomeOutline } from "react-icons/io5";
import { earningsDetails } from '../../Api/AdminRequest';
import Chart from "react-apexcharts";

import useReportModal from '../../Hooks/useReportModal';
const Dashboard = () => {
    const categoryModal = useReportModal();
    const [earnings, setEarnings] = useState({
        totalHome: 0,
        totalUser: 0,
        totalBooking: 0,
    });
    const [dailyEarn, setDailyEarn] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        }, fill: {
            type: 'image',
            image: {
                src: ['images/img.jpg', 'images/img.jpg'],
                width: undefined,  // optional
                height: undefined  //optional
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    })

    useEffect(() => {
        const fetchEarnings = async () => {
            try {
                const response = await earningsDetails();
                setEarnings(response.data);
            } catch (error) {
                console.log("error")
            }
        };

        fetchEarnings();
    }, []);


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
                    gap-2
                    ' onClick={categoryModal.onOpen}>
                    Generate Report <TbReport size={25} />
                </button>
            </div>
            <div
                className='
                grid 
                grid-cols-3 
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
                            TOTAL HOMES
                        </h2>
                        <h1
                            className='
                            text-[20px] 
                            leading-[24px] 
                            font-bold 
                            text-[#5a5c69] 
                            mt-[5px]
                            '>
                            {earnings.totalHome}
                        </h1>
                    </div>

                    <IoHomeOutline fontSize={28} />
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
                            {earnings.totalUser}
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
                            {earnings.totalBooking}
                        </h1>
                    </div>
                    <TbBrandBooking fontSize={28} />
                </div>
            </div>
            <div className='flex grid-cols-2 justify-center mt-5'>

                <Chart options={dailyEarn.options} series={dailyEarn.series} fill={dailyEarn.fill} type="bar" width="500" />
                <Chart options={dailyEarn.options} series={dailyEarn.series} fill={dailyEarn.fill} type="line" width="500" />



            </div>
            <Chart options={dailyEarn.options} series={dailyEarn.series} fill={dailyEarn.fill} type="bar" width="500" />
            <sling-sdk-connect></sling-sdk-connect>

        </div>
    )
}

export default Dashboard