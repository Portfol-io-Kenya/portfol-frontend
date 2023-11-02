import React from 'react';
import Card from './cards/Card';
import clsx from 'clsx';

interface Props {
    title?: any
    fontWeight?: string
    className?: string
}

const SectionHeader: React.FC<Props> = ({title, fontWeight, className}) => {
    return (
        <Card 
            image='url(/media/bgs/pattern-8.jpg)'
            className={clsx('text-white py-6', className)}
            bgColor='bg-green-600/90'
            bgSize='80%'
            bgRepeat='repeat'
        >
            <h2 className={`${fontWeight ?? 'font-semibold'} text-2xl`}>{title}</h2>
        </Card>
    );
};

export default SectionHeader;