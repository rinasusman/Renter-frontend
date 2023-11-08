import React, { useEffect, useState } from 'react'
import Container from '../../Container'
import EmptyPage from '../../EmptyPage'
import ListingCard from './ListingCard'
import userAxios from "../../../Axios/guestAxios.js";
import { Link } from 'react-router-dom';

const ListingHome = ({ selectedCategory }) => {
    const [listings, setListings] = useState([]);
    const [heartStates, setHeartStates] = useState({});

    const handleHeartToggle = (listingId) => {
        setHeartStates((prev) => ({
            ...prev,
            [listingId]: !prev[listingId],
        }));
    };

    const fetchHomeDetails = async () => {
        try {
            let response = await userAxios.get('/getHomeList');
            if (Array.isArray(response.data)) {
                setListings(response.data);
            }
        } catch (e) {
            console.log('error', e.message);
        }
    };
    useEffect(() => {
        fetchHomeDetails();
    }, []);

    const filteredListings = selectedCategory
        ? listings.filter((list) => list.category === selectedCategory)
        : listings;
    if (filteredListings.length === 0) {

        return (
            <EmptyPage showReset />
        )
    }

    return (
        <Container>
            <div className='
            pt-22
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
            '>
                {filteredListings.map((list) => (
                    // <Link to={`/lsitinfo/${list._id}`} key={list._id}>
                    <ListingCard
                        key={list._id}
                        data={list}
                        isHeartFilled={heartStates[list._id] || false}
                        toggleHeart={() => handleHeartToggle(list._id)} />
                    // </Link>
                ))}

            </div>
        </Container >
    )
}

export default ListingHome