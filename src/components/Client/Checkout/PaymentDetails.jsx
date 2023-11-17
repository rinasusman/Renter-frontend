import React, { useState } from 'react'
import Button from '../../Button'
import Input from '../inputs/Input'
import { useForm } from 'react-hook-form';
import DropDown from '../inputs/DropDown';
import useRazorpay from 'react-razorpay';

const PaymentDetails = ({ data }) => {
    const [Razorpay] = useRazorpay();
    const { guestCount, startDate, endDate } = data
    const startDateObject = new Date(startDate);
    const day = startDateObject.getDate();
    const month = startDateObject.toLocaleString('default', { month: 'short' });

    const endDateObject = new Date(endDate);
    const endday = endDateObject.getDate();
    const endmonth = endDateObject.toLocaleString('default', { month: 'short' });
    const formattedStartDate = `${day}-${month}`;
    const formattedEndDate = `${endday}-${endmonth}`;




    const handleConfirmAndPay = () => { }





    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        },
    } = useForm({
        defaultValues: {
            email: '',


        },
    });
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('upi');
    const paymentMethodOptions = [
        { value: 'upi', label: 'UPI' },
        { value: 'credit_card', label: 'Credit Card' },
        { value: 'paypal', label: 'PayPal' },
        // Add more payment options as needed
    ];
    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };
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
                    <div>Your trip </div>

                </div>
                <div className="
                    
                    items-center
                    gap-4
                    font-light
                    text-neutral-500
        "
                >
                    <div className='font-semibold'>
                        Dates
                    </div>
                    <div>
                        {formattedStartDate}
                        <span> </span>  TO {formattedEndDate}
                    </div>
                    <div className='font-semibold'>
                        Guests
                    </div>
                    <div>
                        {guestCount}
                        <span> </span> guest
                    </div>
                </div>
            </div>

            <hr />
            <div className="
               text-lg 
               font-semibold
                ">
                <div className='flex flex-row justify-between'>
                    <div>Pay with</div>
                    <div className='w-[200px]' >
                        <img fill src="/images/payment.jpeg" alt="" /></div>
                </div>

                <DropDown
                    id="paymentMethod"
                    // label="Payment Method"
                    options={paymentMethodOptions}
                    selectedValue={selectedPaymentMethod}
                    onChange={handlePaymentMethodChange}
                />
                {/* <Input
                    id="email"
                    label="UPI"
                    // disabled={isLoading}
                    register={register}
                    errors
                    required
                /> */}
            </div>
            <hr />
            <div className="
               text-lg 
               font-semibold
                ">
                Cancellation policy

                <div className='  items-center
                    gap-4
                    font-light
                    text-neutral-500'>
                    This reservation is non-refundable.
                </div>
            </div>
            <hr />
            <div className="
               text-lg 
               font-semibold
                ">
                Ground rules

                <div className='  items-center
                    gap-4
                    font-light
                    text-sm
                    text-neutral-500'>

                    We ask every guest to remember a few simple things about what makes a great guest.<br />
                    <li>Follow the house rules</li>
                    <li> Treat your Host’s home like your own</li>

                </div>
            </div>
            <hr />
            <div className="
               text-lg 
               font-semibold
                ">


                <div className='  items-center
                    gap-4
                    font-light
                    text-xs
                    text-neutral-500 
                    pb-3'>

                    By selecting the button below, I agree to the <a> Host's House Rules, Ground rules for guests, Renter's</a> <br />Rebooking and Refund Policy and that Airbnb can charge my payment method if I’m responsible<br /> for damage.

                </div>
                <div className="w-[200px]">
                    <Button label="Confirm and Pay" onClick={handleConfirmAndPay} />
                </div>

            </div>
        </div >
    )
}

export default PaymentDetails