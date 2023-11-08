import React, { useEffect, useState } from 'react'
import Button from '../../Button'
import userAxios from '../../../Axios/guestAxios';

const ListingCardSingle = ({ data, onDelete }) => {

    const { location, category, price, imageSrc } = data;

    const handleDelete = () => {
        const tokens = localStorage.getItem('usertoken');
        const headers = {
            'Authorization': `Bearer ${tokens}`,
            'Content-Type': 'application/json',
        };
        if (headers.Authorization) {
            userAxios.delete(`/listdelete/${data._id}`, { headers })
                .then(response => {
                    // Update the frontend state after a successful delete
                    onDelete(data._id);
                    window.location.reload();
                })
                .catch(error => {
                    console.error("Error deleting item: ", error);
                });
        }
    };

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

                    </div>
                </div>
                <div className="font-semibold text-lg">
                    {location}
                </div>
                <div className="font-light text-neutral-500">
                    {category}
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        ₹ {price}
                    </div>

                    <div className="font-light">night</div>

                </div>
                <div className="flex justify-between gap-2">
                    <Button
                        outline
                        label="Edit"
                    />
                    <Button
                        key={data._id}
                        label="Delete"
                        onClick={handleDelete}
                    />
                </div>



            </div>

        </div >

    )
}

export default ListingCardSingle