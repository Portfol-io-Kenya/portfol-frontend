import React from 'react';
import Button from '../UI/Button';

interface Props {
    handleSubmit?: any
    handleChange?: any
    value?: any
}

const ChatControls: React.FC<Props> = ({handleSubmit, handleChange, value}) => {
    return (
        <div className="flex items-center bg-white py-2 pl-5 pr-2 rounded-md">
            <form onSubmit={handleSubmit} className='flex w-full'>
                <input 
                    type="text"
                    value={value}
                    onChange={handleChange} 
                    className="bg-transparent w-full border-none focus:ring-0 outline-none"
                    placeholder='Type your message here...'
                />

                <Button type='submit' className='bg-green-500 text-white'>
                    <span>Send</span>
                    <i className="iconly-Send icli text-lg ml-1"></i>
                </Button>
            </form>   
        </div>
    );
};

export default ChatControls;