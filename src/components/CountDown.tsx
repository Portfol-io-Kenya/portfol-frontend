"use client"
import { useCountdown } from '@/hooks/useCountDown';
import React from 'react';
import TimeItem from './TimeItem';

interface Props {
    targetDate: any
    variant?: 'dark' | 'light'
    size?: 'big' | 'medium' | 'small'
}

const CountDown = ({targetDate, variant, size}: Props) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    return (
        <div className='flex gap-4'>
            <TimeItem variant={variant} size={size} value={days} label='days' />
            <TimeItem variant={variant} size={size} value={hours} label='hours' />
            <TimeItem variant={variant} size={size} value={minutes} label='minutes' />
            <TimeItem variant={variant} size={size} value={seconds} label='seconds' />
        </div>
    );
};

export default CountDown;