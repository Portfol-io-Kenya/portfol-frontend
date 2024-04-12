import React from 'react';

interface Props {
    text: string
}

const Pill = ({text}:Props) => {
    return (
        <div className="rounded-full py-1 px-5 text-xs font-medium cursor-pointer bg-primary/20 hover:bg-primary hover:text-white w-fit border-none outline-none">
            {text}
        </div>
    );
};

export default Pill;