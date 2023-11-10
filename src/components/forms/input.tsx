import clsx from 'clsx';
import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  register?: any;
  name: string;
  errors?: any;
  type?: string;
  shadow?: boolean;
  variant?: 'normal' | 'solid' | 'outline' | 'line';
  dimension?: 'small' | 'medium' | 'big';
}

const variantClasses = {
  normal:
    'bg-slate-200 mb-4 border border-border-base rounded-md focus:shadow focus:bg-light focus:border-accent',
  solid:
    'bg-slate-200 mb-4 border border-border-100 rounded-md focus:bg-light focus:border-accent',
  outline: 'border border-border-base rounded-md focus:border-accent',
  line: 'ltr:pl-0 rtl:pr-0 border-b border-border-base rounded-none focus:border-accent',
};

const sizeClasses = {
  small: 'text-sm h-7',
  medium: 'h-9',
  big: 'h-12',
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      register,
      name,
      errors,
      children,
      variant = 'normal',
      dimension = 'medium',
      shadow = false,
      disabled = false,
      type = 'text',
      inputClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="block mb-3 text-sm font-semibold leading-none text-body-dark"
          >
            {label}
          </label>
        )}
        <input
          defaultValue="" 
          {...register(name)}
          type={type}
          className={clsx(
            'flex w-full appearance-none items-center p-3 text-sm text-heading transition duration-300 ease-in-out focus:outline-none focus:ring-0',
            shadow && 'focus:shadow',
            variantClasses[variant],
            sizeClasses[dimension],
            disabled && 'cursor-not-allowed bg-slate-100',
            inputClassName
          )}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          {...rest}
        />
        {errors && <p className="-mt-2 mb-3 text-xs text-red-500">{errors[name]?.message}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
export default Input;