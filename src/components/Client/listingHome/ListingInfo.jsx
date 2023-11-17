import React from 'react'
import Avatar from '../../Avatar'

const ListingInfo = ({ data }) => {
    console.log(data, "nameeeeeeeeeeeeeeeeee");
    if (!data) {
        return null;
    }
    const hostName = data.userId.name || "Host's Name Not Available";
    const firstLetter = hostName ? hostName.charAt(0).toUpperCase() : "";
    return (
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
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
                    <div className="flex items-center justify-center bg-rose-500 rounded-full w-[30px] h-[30px]">
                        <span className="font-semibold text-2xl text-white">{firstLetter}</span>

                    </div>
                    <div>Hosted by {hostName} </div>

                </div>
                <div className="
                        flex
                        flex-row
                        items-center
                        gap-4
                        font-light
                        text-neutral-500
            "
                >
                    <div>
                        {data.guestCount} guests
                    </div>
                    <div>
                        {data.roomCount}  rooms
                    </div>
                    <div>
                        {data.bathroomCount} bathrooms
                    </div>
                </div>
            </div>
            <hr />
            {/* {category && (
                <ListingCategory
                    icon={category.icon}
                    label={category?.label}
                    description={category?.description}
                />
            )} */}
            <hr />
            <div className="
        text-lg font-light text-neutral-500">
                {data.description
                }
            </div>
            <hr />
            {/* <Map center={coordinates} /> */}
        </div>
    )
}

export default ListingInfo