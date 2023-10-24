import React from 'react';
import SearchBar from './UI/SearchBar';

const JobsHero = () => {
    return (
        <div
            className="rounded-md"
            style={{
                backgroundImage: `url(/media/bgs/pattern-1.jpg)`,
                backgroundSize: '100%',
                backgroundPosition: "center center",
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div 
                className="bg-green-700/90 text-white py-6 px-7 rounded-md"
            >
                <h2 className="text-xl"><b>Welcome!</b> Looking for your next <b>project?</b></h2>
                <p className="text-sm mb-5">Portfol.io is the platform where you can look for and find work and discover talent.</p>
                <SearchBar />
            </div>
        </div>
    );
};

export default JobsHero;