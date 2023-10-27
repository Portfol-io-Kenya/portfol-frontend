import React from 'react';
import Card from './cards/Card';

interface Props {
    title?: any
    fontWeight?: string
}

const SectionHeader: React.FC<Props> = ({title, fontWeight}) => {
    return (
        <Card 
            image='url(/media/bgs/pattern-8.jpg)'
            className='text-white py-6'
            bgColor='bg-green-600/90'
            bgSize='80%'
            bgRepeat='repeat'
        >
            <h2 className={`${fontWeight ?? 'font-semibold'} text-2xl`}>{title}</h2>
        </Card>
    );
};

export default SectionHeader;