import React from 'react';

interface Props {
    title?: string
}

const WebSectionHeader = ({title}: Props) => {
    return (
        <div className="flex p-20 justify-center bg-black">
            <span className="text-white text-4xl">{title}</span>
        </div>
    );
};

export default WebSectionHeader;