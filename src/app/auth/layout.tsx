import Card from '@/components/cards/Card';
import React from 'react';

const AuthLayout = ({ 
    children 
} : {
    children: React.ReactNode
}) => {
    return (
        <div className='flex h-screen  items-center justify-center'>
            <div className="basis-1/2 h-full flex items-center justify-center bg-emerald-500">
                <Card className='w-[450px]'>
                    {children}
                </Card>
            </div>
            <div 
                className="basis-1/2 h-full w-full"
                style={{
                    backgroundImage: "url(/media/bgs/portfol-logo-bg.jpg)",
                    backgroundSize: "cover"
                }}
            >

            </div>
            
        </div>
    );
};

export default AuthLayout;