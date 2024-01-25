import clsx from 'clsx';
import React from 'react';

interface Props {
    value: number
    label: string
    variant?: 'dark' | 'light'
    size?: 'big' | 'medium' | 'small'
    className?: string
}

const classes = {
    root: 'flex flex-col items-center justify-center',
    dark: 'bg-gray-700/95 text-neutral border border-white/20',
    light: 'bg-white text-black',
    small: 'p-2 rounded',
    medium: 'w-32 h-32 rounded-lg',
    big: 'w-52 h-52 rounded-xl',
}

const TimeItem = ({value, label, variant='light', size='medium', className}:Props) => {
    const classesName = clsx(
        classes.root,
        {
          [classes.light]: variant === 'light',
          [classes.dark]: variant === 'dark',
          [classes.small]: size === 'small',
          [classes.medium]: size === 'medium',
          [classes.big]: size === 'big',
        },
        className
      )
    return (
        <div className={classesName}>
            <p className={clsx("font-bold",
                {
                    'text-xl': size === 'small',
                    'text-4xl': size === 'medium',
                    'text-6xl': size === 'big',
                } 
            )}>
                {value}
            </p>
            <p className={clsx("uppercase font-semibold",
                {
                    'tracking-[2px] text-[9px]': size === 'small',
                    'tracking-[5px] text-sm': size === 'medium',
                    'tracking-[10px]': size === 'big',
                }
            )}>
                {label}
            </p>
        </div>
    );
};

export default TimeItem;