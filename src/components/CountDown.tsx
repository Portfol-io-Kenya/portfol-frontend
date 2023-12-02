"use client"
import { useCountdown } from '@/hooks/useCountDown';
import React from 'react';
import TimeItem from './TimeItem';

const CountDown = ({targetDate}: any) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
        <div className='flex gap-4'>
            <TimeItem value={days} label='days' />
            <TimeItem value={hours} label='hours' />
            <TimeItem value={minutes} label='minutes' />
            <TimeItem value={seconds} label='seconds' />
        </div>
    );
};

export default CountDown;