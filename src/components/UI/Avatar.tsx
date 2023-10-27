import React from 'react';

interface Props {
    className?: string
    img?: string
    width?: string
    height?: string
}

const Avatar: React.FC<Props> = ({className, img, width, height}) => {
    return (
        <div 
            className={`${width ?? 'w-[50px]'} ${height ?? 'h-[50px]'} rounded ${className}`}
            style={{
                backgroundImage: `${img ?? 'url(/media/avatars/avatar-01.jpg)'}`,
                backgroundSize: "100%"
            }}
        ></div>
    );
};

export default Avatar;