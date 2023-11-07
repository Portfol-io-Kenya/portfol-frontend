import Login from '@/components/auth/Login';
import Card from '@/components/cards/Card';
import React from 'react';

const AuthPage = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <Card className='w-[450px]'>
                <Login />
            </Card>
        </div>
    );
};

export default AuthPage;