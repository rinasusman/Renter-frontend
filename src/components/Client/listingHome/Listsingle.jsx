import React, { useEffect, useState } from 'react'
import ListingHead from './ListingHead'
import ListingInfo from './ListingInfo'
import { useParams } from 'react-router-dom';
import userAxios from "../../../Axios/guestAxios.js";
import ListingReservation from './ListingReservation';
;
const Listsingle = () => {

    const { id } = useParams();
    const [listingData, setListingData] = useState(null);
    console.log(listingData, "dtaaaaaaa9999999999")
    useEffect(() => {
        const fetchListingData = async () => {
            try {
                const response = await userAxios.get(`/getListingById/${id}`);
                setListingData(response.data);
            } catch (error) {
                console.error('Error fetching listing data:', error);
            }
        };

        fetchListingData();
    }, [id]);



    return (
        <div
            className="
          max-w-screen-lg 
          mx-auto
        "
        >
            <div className="flex flex-col gap-6">
                <ListingHead
                    data={listingData}
                />
                <div
                    className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
                >
                    <ListingInfo
                        data={listingData}
                    />
                    <div
                        className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
                    >
                        <ListingReservation
                            data={listingData}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Listsingle