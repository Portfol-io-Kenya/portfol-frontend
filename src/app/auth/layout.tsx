import Card from '@/components/cards/Card';
import React from 'react';

const AuthLayout = ({ 
    children 
} : {
    children: React.ReactNode
}) => {
    return (
        <div className='flex h-screen  items-center justify-center'>
            <div 
                className="basis-1/2 h-full flex items-center justify-center bg-gray-800"
            >
                <Card 
                    className='w-[450px] rounded-lg'
                >
                    {children}
                </Card>
            </div>
            <div 
                className="basis-1/2 h-full w-full"
                style={{
                    backgroundImage: "url(/media/portfol-logos/portfol-13.webp)",
                    backgroundSize: "cover"
                }}
            >

            </div>
            
        </div>
    );
};

export default AuthLayout;