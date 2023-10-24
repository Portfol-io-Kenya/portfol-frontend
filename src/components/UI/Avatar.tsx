import React from 'react';

interface Props {
    className?: any
    img: any
}

const Avatar: React.FC<Props> = ({className, img}) => {
    return (
        <div 
            className={`w-[50px] h-[50px] rounded mr-5 ${className}`}
            style={{
                backgroundImage: `${img}`,
                backgroundSize: "100%"
            }}
        ></div>
    );
};

export default Avatar;