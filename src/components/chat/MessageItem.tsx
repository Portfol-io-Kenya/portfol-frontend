import React from 'react';
import Avatar from '../UI/Avatar';

interface Props {
    avatar?: string
    username?: string
    lastMsg?: string
}

const MessageItem = ({avatar, username, lastMsg}: Props) => {
    return (
        <div className="flex items-center gap-2 pb-3 border-b border-slate-300">
            <Avatar img={avatar} className='rounded-full'/>
            <div className="flex flex-col">
                <h5 className='font-medium'>{username}</h5>
                <span className="text-xs text-slate-500">
                    {lastMsg}
                </span>
            </div>
        </div>
    );
};

export default MessageItem;