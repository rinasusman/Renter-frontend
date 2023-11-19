import React from 'react'
import { SlCalender } from "react-icons/sl";
import { MdOutlineFeedback } from 'react-icons/md';
import useFeedbackModal from '../../../Hooks/useFeedbackModal';
import Button from '../../Button';
const TripCard = ({ booking, activeTab }) => {


    console.log(booking, "booking id:")
    const feedbackModal = useFeedbackModal();
    const handleFeedbackClick = () => {
        feedbackModal.onOpen(booking);
    };

    const renderButtons = () => {
        switch (activeTab) {
            case 'Upcoming':
                return (
                    <div className='w-1/2'>
                        <Button key={booking?._id} label="Cancel" />
                    </div>
                );
            case 'Checkout':
                return (
                    <div className='flex flex-row gap-3'>
                        <div>
                            <SlCalender size={24} />
                        </div>
                        <div>Book Again</div>
                        <div>
                            <MdOutlineFeedback size={28} />
                        </div>
                        <div onClick={handleFeedbackClick} className="cursor-pointer" >
                            Feedback
                        </div>
                    </div >
                );
            // Add other cases as needed
            default:
                return null;
        }
    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row gap-5'>
                <div className='w-[150px] h-[150px] ' >
                    <img fill className='rounded-2xl' src={booking?.home?.imageSrc || 'default-image-url'} alt="" />
                </div>
                <div className='flex flex-col'>
                    <div>
                        {booking?.home?.location || 'N/A'}
                    </div>
                    <div>
                        {booking?.startDate} - {booking?.endDate}
                    </div>
                    <div className='text-neutral-500'>
                        {booking?.home?.title || 'N/A'}
                    </div>
                </div>

            </div>
            <div className='flex flex-row items-center gap-5'>
                {/* ... (existing code) */}
                {renderButtons()}
            </div>
        </div>
    );
};

export default TripCard