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
                className="md:basis-1/2 h-full w-full"
                style={{
                    backgroundImage: "url(/media/portfol-logos/portfol-15.webp)",
                    backgroundSize: "cover"
                }}
            >
                <div className="bg-gray-800/80 h-full w-full md:px-0 flex items-center justify-center">
                    <Card 
                        className='w-[95vw] md:w-[450px] rounded-xl py-14 px-8'
                    >
                        {children}
                    </Card>
                </div>
            </div>
            <div 
                hidden
                className="md:block md:basis-1/2 h-full w-full"
                style={{
                    backgroundImage: "url(/media/portfol-logos/portfol-42.webp)",
                    backgroundSize: "cover"
                }}
            >

            </div>
            
        </div>
    );
};

export default AuthLayout;