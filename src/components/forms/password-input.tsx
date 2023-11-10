import React, { InputHTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label: string;
  register?: any;
  name: string;
  forgotPageLink?: string;
  shadow?: boolean;
  variant?: 'normal' | 'solid' | 'outline';
  errors?: any;
  forgotPageRouteOnClick?: () => void;
}

const variantClasses = {
  normal:
    'bg-slate-200 h-9 mb-4 border border-border-base rounded-md focus:shadow focus:bg-light focus:border-accent',
  solid:
    'bg-slate-200 h-9 border border-border-100 focus:bg-light focus:border-accent',
  outline: 'h-9 border border-border-base focus:border-accent',
};

const PasswordInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      inputClassName,
      label,
      register,
      name,
      errors,
      children,
      variant = 'normal',
      shadow = false,
      type = 'text',
      forgotPageLink = '',
      forgotPageRouteOnClick,
      ...rest
    },
    ref
  ) => {
    const [show, setShow] = useState(false);

    return (
      <div className={className}>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor={name} className="font-semibold text-sm text-body">
            {label}
          </label>

          {forgotPageLink && (
            <Link
              href={forgotPageLink}
              className="text-xs text-slate-500 transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover"
            >
              Forgot Password?
            </Link>
          )}
          {forgotPageRouteOnClick && (
            <button
              onClick={forgotPageRouteOnClick}
              type="button"
              className="text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover"
            >
              Forgot Password?
            </button>
          )}
        </div>
        <div className="relative">
          <input
             defaultValue="" 
             {...register(name)}
            type={show ? 'text' : 'password'}
            className={clsx(
              'p-3 ltr:pl-4 rtl:pr-4 ltr:pr-11 rtl:pl-11 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0',
              shadow && 'focus:shadow',
              variantClasses[variant],
              inputClassName
            )}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            {...rest}
          />
          <label
            htmlFor={name}
            className="absolute right-4 top-5 -mt-2.5 text-body cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <AiOutlineEyeInvisible />
            ) : (
              <AiOutlineEye />
            )}
          </label>
        </div>
        {errors && <p className="-mt-2 mb-3 text-xs text-red-500">{errors[name]?.message}</p>}
      </div>
    );
  }
);
PasswordInput.displayName = 'PasswordInput';
export default PasswordInput;
