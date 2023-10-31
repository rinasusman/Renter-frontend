import React from 'react'
import Container from '../../Container'
import EmptyPage from '../../EmptyPage'
import ListingCard from './ListingCard'

const ListingHome = () => {
    const isEmpty = false
    if (isEmpty) {
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
                <div className='flex gap-8'>
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                </div>

            </div>
        </Container>
    )
}

export default ListingHome