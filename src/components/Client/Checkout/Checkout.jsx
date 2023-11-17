import React from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import BookDetails from './BookDetails'
import ListingInfo from '../listingHome/ListingInfo'
import PaymentDetails from './PaymentDetails'
import { useLocation } from 'react-router-dom'

const Checkout = () => {
    const location = useLocation();
    const reservationData = location.state.reservationData;
    console.log(reservationData, "checkout:");
    return (
        <Container>
            <Heading
                title="Confirm and pay"

            />
            <div
                className="
          max-w-screen-lg 
          mx-auto
        "
            >
                <div className="flex flex-col gap-6">

                    <div
                        className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
                    >
                        <PaymentDetails data={reservationData} />
                        <div
                            className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
                        >
                            <div className="sticky top-[185px]">
                                <BookDetails data={reservationData} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Container>
    )
}

export default Checkout