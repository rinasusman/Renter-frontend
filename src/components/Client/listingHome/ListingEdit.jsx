import React, { useEffect, useState } from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Input from '../inputs/Input'
import { useLocation } from 'react-router-dom'
import Button from '../../Button'

const ListingEdit = () => {

    const location = useLocation();
    const { itemData } = location.state;


    return (
        <Container>
            <Heading
                title="Edit your Home"
                subtitle=""
            />

            <div className="mt-10
                 grid 
                 grid-cols-1 
                 md:grid-cols-1 
                 md:gap-3 
                  w-1/2 border justify-center items-center">

                Title:
                <input className="border-2 rounded-sm w-fill p-3" type=" text" placeholder={itemData.title} />
                <hr />
                Category:
                <input className="border-2 rounded-sm w-fill p-3" type="text" placeholder={itemData.category} />


                <hr />
                Place:
                <input className="border-2 rounded-sm w-fill p-3" type="text" placeholder={itemData.location} />
                <hr />
                Guest:
                <input className="border-2 rounded-sm w-fill p-3" type="text" placeholder={itemData.guestCount} />
                <hr />
                Room:
                <input className="border-2 rounded-sm w-fill p-3" type="text" placeholder={itemData.roomCount} />
                <hr />
                Bathroom:
                <input className="border-2 rounded-sm w-fill p-3" type="text" placeholder={itemData.bathroomCount} />
                <hr />
                Image:
                <img src={itemData.imageSrc} alt="" />
                <hr />
                Description:
                <input className="border-2 rounded-sm w-fill p-3" type="text" placeholder={itemData.description} />
                <hr />
                Price:
                <input className="border-2 rounded-sm w-fill p-3" type="text" placeholder={itemData.price} />
                <Button label="Edit" />

            </div >


        </Container >
    )
}

export default ListingEdit