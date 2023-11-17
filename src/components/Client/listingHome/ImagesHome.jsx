import React from 'react'

const ImagesHome = ({ data }) => {
    if (!data) {
        return null;
    }
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-1 pb-2'>
                <div className='font-semibold'>Home gallery</div>
                <div className='text-neutral-500'> One of the most loved homes on Renter<br /> based on ratings, reviews and reliability</div>
            </div>
            <div className="
              
                overflow-hidden
                rounded-xl
                relative
                flex flex-row
                gap-1
            ">
                <img

                    src={data.imageSrc}
                    className="object-cover  w-[33vw] h-[40vh] cursor-pointer"
                    alt="Image"

                />
                <img

                    src={data.imageSrc}
                    className="object-cover  w-[33vw] h-[40vh] cursor-pointer"
                    alt="Image"

                />
                <img

                    src={data.imageSrc}
                    className="object-cover  w-[33vw] h-[40vh] cursor-pointer"
                    alt="Image"

                />


            </div>
        </>

    )
}

export default ImagesHome