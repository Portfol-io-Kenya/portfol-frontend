import ChatControls from '@/components/chat/ChatControls';
import ChatMessage from '@/components/chat/ChatMessage';
import MessageItem from '@/components/chat/MessageItem';
import Avatar from '@/components/UI/Avatar';
import React from 'react';

const Chat = () => {
    return (
        <div className='flex gap-3'>
            {/* conversations  */}
            <section className='basis-1/3 flex flex-col gap-3 sticky top-[90px] h-[calc(100vh-100px)] rounded-md bg-white
            overflow-scroll'
            >
                <h3 className='sticky top-0 bg-white p-3 pt-5  font-semibold'>Your Conversations</h3>
                
                <div className="p-3">
                    <MessageItem avatar='url(/media/avatars/avatar-04.jpg)' username='Khanyi' lastMsg='Absolutely! I can do it.'/>
                    <MessageItem avatar='url(/media/avatars/avatar-02.jpg)' username='Mufaro' lastMsg='Absolutely! I can do it.'/>
                    <MessageItem avatar='url(/media/avatars/avatar-07.jpg)' username='Ife' lastMsg='Absolutely! I can do it.'/>
                </div>
                
                
            </section>

            {/* inbox */}
            <section className='basis-2/3 flex flex-col'>
                {/* chat header  */}
                <div className="flex rounded-md bg-white p-2 items-center gap-2">
                    <Avatar className='rounded-full' height='h-[40px]' width='w-[40px]' />
                    <div className="flex flex-col ">
                        <h5 className='font-semibold text-sm'>Khanyi Kigali</h5>
                        <span className='text-afrogreen text-xs'>Online</span>
                    </div>
                </div>

                {/* chat inbox  */}
                <div className="flex flex-col grow my-3 rounded-md"
                    style={{
                        backgroundImage: 'url(/media/bgs/pattern-1.jpg)',
                        backgroundSize: 'cover'
                    }}
                >
                    <div className="flex flex-col justify-end grow bg-green-50/90 rounded-md p-3">
                    <ChatMessage 
                        text={'Absolutely! I can do it.'} 
                        time={'10:00'}
                        color='text-neutral bg-green-400'
                    />
                    </div>
                </div>

                {/* chat controls  */}
                <ChatControls />
            </section>
        </div>
    );
};

export default Chat;