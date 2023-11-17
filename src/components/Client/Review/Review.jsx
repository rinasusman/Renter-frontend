import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Review = () => {
    return (
        <div className='
        p-4
        '>

            <div className='flex gap-3 items-center'>
                <div className='w-[40px] h-[40px]' >
                    <img className='rounded-full' src="/images/placeholder.jpg" alt="" />
                </div>
                <div className='text-black font-medium' >
                    Anne Sophie
                </div>
            </div>
            <div className='flex mt-2 items-center gap-2'>
                <div className='flex gap-1'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <div>6 days ago</div>
            </div>
            <div className=' mt-2 items-center text-neutral-500'>

                We booked while it was a place in which the owner was not present, which was not the case.
                I had to leave, being a single woman with her daughter, and due to my daughter's allergy.
            </div>

        </div>
    )
}

export default Review