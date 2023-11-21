import React, { useState } from 'react'
import Button from '../../Button'
import userAxios from '../../../Axios/guestAxios';
const ResevationCard = ({ reservation }) => {


    console.log(reservation, ".....000000000000")
    const { startDate, endDate, item, status, userId, _id } = reservation
    const firstItem = item && item.length > 0 ? item[0] : {};
    const title = firstItem.home?.title || 'N/A';
    const imageSrc = firstItem.home?.imageSrc || '';
    const location = firstItem.home?.location || 'N/A';
    const userName = userId?.name || 'N/A'
    const id = _id
    console.log(id, "kkkkk")
    const [selectedStatus, setSelectedStatus] = useState(status);

    const handleStatusChange = async (newStatus) => {
        try {
            const response = await userAxios.put(`/statusbookings/${id}`, {
                status: newStatus,
            });
            if (response.status === 200) {
                setSelectedStatus(newStatus);
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }

    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row gap-5'>
                <div className='w-[150px] h-[150px] ' >
                    <img fill className='rounded-2xl' src={imageSrc} alt="" />
                </div>
                <div className='flex flex-col'>
                    <div className='font-semibold'>

                        {userName}
                    </div>
                    <div>
                        {startDate} - {endDate}

                    </div>
                    <div className='text-neutral-500'>
                        {title}<br /> {location}
                    </div>
                </div>
                <div>
                    Status:
                    <select className='rounded-2xl'
                        value={selectedStatus}
                        onChange={(e) => handleStatusChange(e.target.value)}
                    >
                        <option value="Booked">Booked</option>
                        <option value="Checkin">Checkin</option>
                        <option value="Checkout">Checkout</option>
                        <option value="Cancel">Cancel</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default ResevationCard
