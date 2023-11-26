<div
className='
flex 
flex-col 
gap-2 
p-6 
overflow-y-scroll
'
>
{messages.map((message) => (
    <>
        <div
            className='
            text-white 
              p-2.5 
              rounded-br-[1rem] 
              rounded-tr-[0] 
              max-w-[28rem] 
              w-auto 
              flex 
              flex-col 
              gap-2
              self-end 
              rounded-bl-[1rem] 
              rounded-tl-[1rem] 
              bg-gradient-to-r from-sky-500 to-blue-500
            '
        >
            <span>hi </span>
            <span className='text-neutral-300 self-end text-xs'>{format("2023 - 11 - 23T14:50:00.000Z")}</span>
        </div>

        <div className='text-white p-2.5 rounded-br-[1rem] rounded-tr-[1rem] max-w-[28rem] w-auto flex flex-col gap-2 self-start rounded-bl-[1rem] rounded-tl-[0] bg-gradient-to-r from-sky-500 to-blue-500'>
            <span>hi </span>
            <span className='text-neutral-300 self-end text-xs'>{format(Date.now())}</span>
        </div>
    </>
))}
{/*chat sender */}

<div
    className=
    "bg-white
    flex
    justify-start
    items-center
    gap-4
    p-2
    rounded-md
    self-start
    w-full
    mt-auto
    "                           
    >

    <InputEmoji
    value={newMessage}
    onChange={handleChange}
     />


<div
    className='flex items-center justify-center text-white border-none rounded-xl
            bg-rose-500 transition-all duration-100 ease-out p-2'>
    Send
</div>


</div>










<>
            <div
                className='
                bg-white
                bg-opacity-60
                shadow-xl
                rounded-lg 
                grid 
                grid-rows-[14vh,60vh,13vh]
                '
            >
                <>
                    <div
                        className='
                        p-4 
                        flex 
                        flex-col
                        '
                    >
                        <div
                            className='
                            flex
                            justify-between
                            items-center
                            p-3
                            '
                        >
                            <div className='flex flex-row  items-center gap-3'>

                                <div className="flex items-center justify-center bg-rose-500 rounded-full  w-12 
                 h-12 ">
                                    <span className="font-semibold text-2xl text-white">{firstLetter}</span>

                                </div>
                                <div
                                    className='
                                     flex
                                     flex-col
                                     justify-start
                                     items-center
                                      text-sm
                                    '
                                >
                                    <span className='font-semibold'>{userData?.name}</span>

                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>

                    { /*Chat Box Messages*/}




                </div>

            </>
        </div >
  </>