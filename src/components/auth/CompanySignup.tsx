"use client"
import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Button from '../UI/Button';
import SocialLogin from './SocialLogin';
import * as yup from 'yup';
import { RegisterCompanyInput } from '@/types';
import Form from '../forms/form';
import Input from '../forms/input';
import PasswordInput from '../forms/password-input';
import { useRegisterCompany } from '@/rest-api/auth';
import YupPassword from 'yup-password'

YupPassword(yup) // extend yup


const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required.'),
  name: yup.string().required('Company name is required'),
  password: yup
    .string().required('Password is required')
    .min(8, 'Password should be 8 characters or more with at least 1 number and 1 uppercase letter.')
    .minNumbers(1, 'password must contain at least 1 number')
    .minSymbols(0),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], "Passwords do not match!")
    .required('Required!')
});

const CompanySignup = () => {
  const { mutate: register, isPending, formError, setFormError } = useRegisterCompany();

  function onSubmit({ email, name, password }: RegisterCompanyInput) {
    register({
      email,
      name, 
      password,
    });
  }

  return (
    <div className='py-2'>
          <h2 className="text-center mb-3 text-lg font-bold tracking-tight text-gray-900">
              Register company account
          </h2>
      {/* <Alert
        variant="error"
        message={formError && formError}
        className="mb-6"
        closeable={true}
        onClose={() => setFormError(null)}
      /> */}
      <SocialLogin />
      <Form onSubmit={onSubmit} yupSchema={loginSchema}>
        <Input name='email' label='Email' type='email' />
        <Input name='name' label='Company Name' type='text' />
        <PasswordInput name='password' label='Password' className='w-1/2 float-left pr-1'/>
        <PasswordInput name='confirmPassword' label='Confirm Password' className='w-1/2 float-right pl-2' />

        <Button
            className={clsx("flex justify-center mt-2 w-full rounded-xl bg-afrogreen py-[12px] text-base font-medium \
            text-neutral transition duration-200 hover:bg-dark active:bg-dark  \
            hover:cursor-pointer")} 
            type="submit" 
            disabled={isPending}
            onClick={() => setFormError(null)}
        >
            <span className='indicator-label'>Sign In</span>
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

export default CompanySignup;