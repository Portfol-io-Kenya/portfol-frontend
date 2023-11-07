import React from 'react';

const BankCard = () => {
    return (
        <div className="flex flex-col justify-between mx-8 h-44 px-5 py-7 bg-white/30 border border-white/50 backdrop-blur rounded-lg mb-20">
            <h5 className='font-bold text-xs'>VISA</h5>
            <div className='flex items-start mt-5 mb-7 text-xl tracking-[5px]'>
                <p>**** **** **** </p>
                <p className='text-lg ml-2'> 3248</p>
            </div>

            <div className="flex justify-between text-white/70 text-[10px]">
                <span>Simba Zulu</span>
                <span>05/27</span>
            </div>
        </div>
    );
};

export default BankCard;