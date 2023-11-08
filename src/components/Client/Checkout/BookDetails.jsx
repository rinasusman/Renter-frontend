import React from 'react'
import Button from '../../Button'

const BookDetails = () => {
    return (
        <div
            className="
    bg-white 
      rounded-xl 
      border-[1px]
    border-neutral-200 
      overflow-hidden
    "
        >
            <div className="
              flex flex-row  h-[120px] gap-1 p-4">
                <div className="text-2xl font-semibold w-[150px] h-[200px] ">
                    <img className="rounded-xl" src="/images/img.jpg" alt="" />
                </div>
                <div className="font-light text-neutral-600">
                    Woods - 4BHK Villa in Vagamon with great privacy
                </div>
            </div>
            <hr className='ml-4 mr-4' />

            <div className="flex flex-col gap-2 p-4">
                <div
                    className="
                         text-xl 
                          font-semibold 
                           flex 
                         flex-row 
                         items-center
                         gap-2
                     "
                >
                    <div>Price details </div>

                </div>
                <div className='flex flex-row  text-neutral-600 justify-between'>
                    <div>₹2,700 x 5 nights</div>
                    <div>₹13,500</div>
                </div>

                <div className='flex flex-row  text-neutral-600 justify-between'>
                    <div>Taxes</div>
                    <div>₹1,620</div>
                </div>

            </div>

            <hr className='ml-4 mr-4' />
            <div
                className="
        p-4 
        flex 
        flex-row 
        items-center 
        justify-between
        font-semibold
        text-lg
      "
            >
                <div>
                    Total
                </div>
                <div>
                    ₹17,025.89
                </div>
            </div>
        </div >
    )
}

export default BookDetails