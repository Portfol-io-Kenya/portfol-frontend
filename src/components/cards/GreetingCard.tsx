import React from 'react';
import Card from './Card';

const GreetingCard = () => {
    return (
        <Card>
            <h5 className='text-lg'>Hello <b>Simba!</b> 😀</h5>
            <span className='text-sm text-slate-500'>Welcome to your dashbord</span>
        </Card>
    );
};

export default GreetingCard;