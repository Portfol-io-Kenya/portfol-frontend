"use client"
import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Button from '../UI/Button';
import SocialLogin from './SocialLogin';
import * as yup from 'yup';
import { useLogin } from '@/rest-api/auth';
import { LoginUserInput } from '@/types';
import Alert from '../UI/Alert';
import Form from '../forms/form';
import Input from '../forms/input';
import PasswordInput from '../forms/password-input';


const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required.'),
  password: yup.string().required('Password is required'),
});

const LoginForm = () => {
  const { mutate: login, isPending, serverError, setServerError } = useLogin();

  function onSubmit({ email, password }: LoginUserInput) {
    login({
      email,
      password,
    });
  }

  return (
    <div className='py-2'>
          <h2 className="text-center mb-3 text-lg font-bold tracking-tight text-gray-900">
              Login your account.
          </h2>
      <Alert
        variant="error"
        message={serverError && serverError}
        className="mb-6"
        closeable={true}
        onClose={() => setServerError(null)}
      />
      <SocialLogin />
      <Form onSubmit={onSubmit} yupSchema={loginSchema}>
        <Input name='email' label='Email' type='email' />
        <PasswordInput forgotPageLink='#' name='password' label='Password'/>
        <Button
            className={clsx("flex justify-center mt-2 w-full rounded-xl bg-green-600 py-[12px] text-base font-medium \
            text-white transition duration-200 hover:bg-dark active:bg-dark  \
            hover:cursor-pointer")} 
            type="submit" 
            disabled={isPending}
            onClick={() => setServerError(null)}
        >
            <span className='indicator-label'>Sign In</span>
        </Button>
        <div className='mt-1 text-gray-500 text-center text-sm'>
            No account yet?{' '}
            <Link href='/auth/signup' className='text-green-500'>
                Sign Up
            </Link>
        </div>
      </Form>
    </div>
  )

}

export default LoginForm;