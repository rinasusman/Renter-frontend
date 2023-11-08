import React from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import BookDetails from './BookDetails'
import ListingInfo from '../listingHome/ListingInfo'
import PaymentDetails from './PaymentDetails'

const Checkout = () => {


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
                        <PaymentDetails />
                        <div
                            className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
                        >
                            <div className="sticky top-[185px]">
                                <BookDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </Container>
    )
}

export default Checkout