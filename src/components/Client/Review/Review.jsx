import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Review = ({ userName, star, comment }) => {

    console.log(userName, "userName::::")


    return (
        <div className='
        p-4
        '>

            <div className='flex gap-3 items-center'>
                <div className='w-[40px] h-[40px]' >
                    <img className='rounded-full' src="/images/placeholder.jpg" alt="" />
                </div>
                <div className='text-black font-medium' >
                    {userName}
                </div>
            </div>
            <div className='flex mt-2 items-center gap-2'>
                <div className='flex gap-1'>
                    {Array.from({ length: parseInt(star) }, (_, index) => (
                        <AiFillStar key={index} />
                    ))}

                </div>
                <div>6 days ago</div>
            </div>
            <div className=' mt-2 items-center text-neutral-500'>
                {comment}
            </div>

        </div>
    )
}

export default Review