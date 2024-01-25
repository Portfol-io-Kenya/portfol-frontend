"use client"
import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Button from '../UI/Button';
import SocialLogin from './SocialLogin';
import * as yup from 'yup';
import { RegisterUserInput } from '@/types';
import Alert from '../UI/Alert';
import Form from '../forms/form';
import Input from '../forms/input';
import PasswordInput from '../forms/password-input';
import { useRegister } from '@/rest-api/auth';
import YupPassword from 'yup-password'

YupPassword(yup) // extend yup


const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required.'),
  firstName: yup.string().required('Firstname is required'),
  lastName: yup.string().required('Lastname is required'),
  password: yup
    .string().required('Password is required')
    .min(8, 'Password should be 8 characters or more with at least 1 number and 1 uppercase letter.')
    .minNumbers(1, 'password must contain at least 1 number')
    .minUppercase(1, 'password must contain at least 1 uppercase letter')
    .minSymbols(0),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords do not match!")
    .required('Required!')
});

const IndividualSignup = () => {
  const { mutate: register, isPending, formError, setFormError } = useRegister();

  function onSubmit({ email, firstName, lastName, password }: RegisterUserInput) {
    register({
      email,
      firstName,
      lastName,
      password,
    });
  }

  return (
    <div className='py-2'>
          <h2 className="text-center mb-3 text-lg font-bold tracking-tight text-gray-900">
              Register personal account.
          </h2>
      {/* <Alert
        variant="error"
        message={formError && formError}
        className="mb-6"
        closeable={true}
        onClose={() => setServerError(null)}
      /> */}
      <SocialLogin />
      <Form onSubmit={onSubmit} yupSchema={loginSchema}>
        <Input name='email' label='Email' type='email' />
        <Input name='firstName' label='First Name' type='text' className='w-1/2 float-left pr-1' />
        <Input name='lastName' label='Last Name' type='text' className='w-1/2 float-right pl-1' />
        <PasswordInput name='password' label='Password' className='w-1/2 float-left pr-1' />
        <PasswordInput name='confirmPassword' label='Confirm Password' className='w-1/2 float-right pl-1'/>

        
        <Button
            className={clsx("flex justify-center mt-2 w-full rounded-xl bg-afrogreen py-[12px] text-base font-medium \
            text-neutral transition duration-200 hover:bg-dark active:bg-dark  \
            hover:cursor-pointer")} 
            type="submit" 
            disabled={isPending}
            onClick={() => setFormError(null)}
        >
            <span className='indicator-label'>Sign Up</span>
        </Button>
        <div className='mt-1 text-gray-500 text-center text-sm'>
            Already have an account?{' '}
            <Link href='/auth/login' className='text-afrogreen'>
                Log in
            </Link>
        </div>
      </Form>
    </div>
  )

}

export default IndividualSignup;