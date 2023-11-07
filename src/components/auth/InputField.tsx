import React from 'react';
import {Field} from 'formik';
import clsx from 'clsx';

interface Props {
    touched: any
    errors: any
    type: string
    name: string
}

const InputField = ({touched, errors, type, name}: Props) => {
    return (
        <>
            <Field 
                type={type} 
                name={name} 
                className={clsx(
                    'mt-2 mb-4 flex h-12 w-full items-center justify-center rounded-xl border border-slate-400 bg-white/0 p-3 text-sm outline-none',
                    {'border-red-500': touched && errors},
                    {
                        'border-green-400': touched && !errors,
                    }
                )}
            />
            {touched && errors &&(
                <div className='flex text-red-500 text-sm mb-2'>
                    <span role='alert'>{errors}</span>
                </div>
            )}
        </>
    );
};

export default InputField;