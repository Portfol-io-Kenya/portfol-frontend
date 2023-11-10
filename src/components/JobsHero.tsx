import React from 'react';
import SearchBar from './UI/SearchBar';
import Card from './cards/Card';

const JobsHero = () => {
    return (
        <Card
            image='url(/media/bgs/pattern-1.jpg)'
            className='text-white py-6 px-7'
            bgColor='bg-green-600/90'
            customClass='mb-3'
        >
            <h2 className="text-xl"><b>Welcome!</b> Looking for your next <b>project?</b></h2>
            <p className="text-sm mb-5">Portfol.io is the platform where you can look for and find work and discover talent.</p>
            <SearchBar />
        </Card>
    );
};

export default JobsHero;