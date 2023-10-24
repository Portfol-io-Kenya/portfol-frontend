import React from 'react';
import Button from './Button';
import { toAbsoluteUrl } from '@/lib';

interface Props {
    query?: string,
    handleChange?: any
}

const SearchBar: React.FC<Props> = ({query, handleChange}) => {
    
    return (
        <div 
            className="flex items-center h-16 bg-white/50 backdrop-blur-sm rounded-md p-2"
        >
            <i className="text-green-600 text-3xl iconly-Search"></i>
            <input 
                type="search" 
                value={query}
                onChange={handleChange}
                className="w-full text-white border-none bg-transparent mx-3 outline-none" 
                placeholder="Search..."
            />
            <Button
                variant='normal'
                className='bg-white text-green-600 px-12 focus'
            >
                Search
            </Button>
        </div>
    );
};

export default SearchBar;