import React from 'react'
import Button from '../../Button'

const ListingCard = () => {
    return (
        <div

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
                    <image
                        fill
                        className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
                        src="./images/img.jpg"
                        alt="Listing"
                    />
                    <img fill className="object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition" src="./images/img.jpg" alt="" />
                    <div className="
            absolute
            top-3
            right-3
          ">
                        {/* <HeartButton
                            listingId={data.id}
                            currentUser={currentUser}
                        /> */}
                    </div>
                </div>
                <div className="font-semibold text-lg">
                    {/* {location?.region}, {location?.label} */}Bangalore,Karnataka
                </div>
                <div className="font-light text-neutral-500">
                    {/* {reservationDate || data.category} */}Nov12-Nov15
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        {/* $ {price} */}2000/-
                    </div>

                    <div className="font-light">night</div>

                </div>



            </div>
        </div>
    )
}

export default ListingCard