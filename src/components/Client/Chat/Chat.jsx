import React, { useState } from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Conversation from './Conversation'
import ChatBox from './ChatBox'

const Chat = () => {
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    return (
        <Container>
            <div className='
            relative
            grid 
            grid-cols-[25%,auto]
            gap-4
            '>
                {/* Left Side*/}
                <div className='
                flex
                flex-col
                gap-4
                '>
                    <div className='
                       flex 
                       flex-col
                       gap-4
                       bg-white
                       bg-opacity-60
                     
                       shadow-xl
                       rounded-xl
                       p-4 h-auto 
                       min-h-[80vh]
                       overflow-scroll
                    '>


                        <h1 className='font-semibold'>Chats</h1>
                        <div className='
                           flex 
                           flex-col 
                           gap-4
                           '>
                            <div>
                                <Conversation />
                                <Conversation />
                                <Conversation />
                                <Conversation />
                                <Conversation />
                                <Conversation />

                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className='
                flex
                flex-col
                gap-4
                '>
                    <ChatBox />
                </div>

            </div>
        </Container>
    )
}

export default Chat