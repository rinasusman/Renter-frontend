import React, { useState } from 'react';
import Heading from '../../Heading';
import HeartButton from '../../HeartButton';

const ListingHead = ({ data, isHeartFilled, toggleHeart }) => {


    if (!data) {
        return null;
    }

    return (
        <div>
            <Heading
                title={data.title}
                subtitle={data.location}
            />
            <div className="
                w-full
                h-[60vh]
                overflow-hidden
                rounded-xl
                relative
            ">
                <img
                    src={data.imageSrc}
                    className="object-cover w-full cursor-pointer"
                    alt="Image"

                />
                <div
                    className="
            absolute
            top-5
            right-5
          "
                >
                    <HeartButton listingId={data._id} isFilled={isHeartFilled} toggleHeart={toggleHeart} />

                </div>

            </div>
            {/* <div className='flex flex-row gap-2'>
                <div className="
                w-[40vw]
                h-[50vh]
                overflow-hidden
                rounded-xl
                relative
            ">
                    <img
                        src={data.imageSrc}
                        className="object-cover w-full cursor-pointer"
                        alt="Image"

                    />
                    <div
                        className="
            absolute
            top-5
            right-5
          "
                    >
                        <HeartButton listingId={data._id} isFilled={isHeartFilled} toggleHeart={toggleHeart} />

                    </div>

                </div>
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-row gap-2'>
                        <div className="
                w-[20vw]
                h-[25vh]
                overflow-hidden
                rounded-xl
                relative
               
            ">
                            <img
                                src={data.imageSrc}
                                className="object-cover w-full cursor-pointer"
                                alt="Image"

                            />



                        </div>
                        <div className="
                w-[20vw]
                h-[25vh]
                overflow-hidden
                rounded-xl
                relative
               
            ">
                            <img
                                src={data.imageSrc}
                                className="object-cover w-full cursor-pointer"
                                alt="Image"

                            />



                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <div className="
                w-[20vw]
                h-[25vh]
                overflow-hidden
                rounded-xl
                relative
               
            ">
                            <img
                                src={data.imageSrc}
                                className="object-cover w-full cursor-pointer"
                                alt="Image"

                            />



                        </div>
                        <div className="
                w-[20vw]
                h-[25vh]
                overflow-hidden
                rounded-xl
                relative
               
            ">
                            <img
                                src={data.imageSrc}
                                className="object-cover w-full cursor-pointer"
                                alt="Image"

                            />



                        </div>
                    </div>

                </div>




            </div> */}




        </div >
    );
}

export default ListingHead;
