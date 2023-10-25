import React from 'react';
import Card from './cards/Card';

const SectionHeader = ({title}) => {
    return (
        <Card 
            image='url(/media/bgs/pattern-8.jpg)'
            className='bg-green-600/90 text-white py-6'
            bgSize='80%'
            bgRepeat='repeat'
        >
            <h2 className='font-semibold text-2xl'>{title}</h2>
        </Card>
    );
};

export default SectionHeader;