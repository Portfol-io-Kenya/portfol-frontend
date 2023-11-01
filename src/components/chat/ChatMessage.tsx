import clsx from 'clsx';
import React from 'react';

interface Props {
    text?: string
    time?: string
    classname?: string
    color?: string
}

const ChatMessage: React.FC<Props> = ({text, time, classname, color}) => {
    return (
        <div className={clsx("flex flex-col", classname)}>
            <div className="flex flex-col w-fit max-w-[250px]">
                {/* much of this will change after real data from the api is added as the structure changes  */}
                <div className={clsx('rounded-b rounded-tr  p-2 text-sm', color)}>
                    {text}
                </div>
                <span className='text-xs self-end text-slate-400'>{time}</span>
            </div>
            
        </div>
    );
};

export default ChatMessage;