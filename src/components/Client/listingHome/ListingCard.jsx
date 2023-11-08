import React, { useEffect, useState } from 'react'
import Button from '../../Button'
import userAxios from "../../../Axios/guestAxios.js";
import HeartButton from '../../HeartButton';
import { Link } from 'react-router-dom';

const ListingCard = ({ data, isHeartFilled, toggleHeart }) => {

    const { location, category, price, imageSrc } = data;
    console.log(data._id, "llllllllllll")



    return (

        < div

            className="col-span-1 cursor-pointer group mt-4"
        >

            <div className="flex flex-col gap-2 w-full">
                <div
                    className="
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          "
                >

                    <img fill
                        className="object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition" src={imageSrc} alt="" />
                    <div className="
            absolute
            top-3
            right-3
          ">
                        <HeartButton listingId={data._id} isFilled={isHeartFilled} toggleHeart={toggleHeart} />

                    </div>
                </div>
                <Link to={`/lsitinfo/${data._id}`} key={data._id}>
                    <div className="font-semibold text-lg">

                        {location}

                    </div>
                </Link>
                <div className="font-light text-neutral-500">
                    {category}
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        ₹ {price}
                    </div>

                    <div className="font-light">night</div>

                </div>



            </div>

        </div >

    )
}

export default ListingCard