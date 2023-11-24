import React from 'react'

const Conversation = () => {
    return (
        <>
            <div className='
        flex
        flex-row
        justify-between
        items-center
        rounded-md
        p-4
        hover:bg-gray-300
         cursor-pointer
        '>
                <div className='flex flex-row  items-center gap-1'>
                    <div className='
                 absolute
             
                 left-13
                 w-4 
                 h-4 
                 bg-lime-600
                 rounded-full'>
                    </div>
                    <img className='
                 w-12 
                 h-12 
                 rounded-full
                 '
                        src="/images/placeholder.jpg" alt=""
                    />
                    <div
                        className='
                    flex
                    flex-col
                    justify-start
                    items-center
                    text-sm
                    '
                    >
                        <span className='font-semibold'>Rinas</span>
                        <span>Online</span>
                    </div>
                </div>
            </div >
            <hr />

        </>
    )
}

export default Conversation