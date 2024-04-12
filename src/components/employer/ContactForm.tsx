"use client"
import * as React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import Button from '../UI/Button';
import * as yup from 'yup';
import { ContactEmployerInput, RegisterUserInput } from '@/types';
import Alert from '../UI/Alert';
import Form from '../forms/form';
import Input from '../forms/input';
import PasswordInput from '../forms/password-input';
import { useRegister } from '@/rest-api/auth';
import YupPassword from 'yup-password'
import TextArea from '../forms/text-area';

YupPassword(yup) // extend yup


const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required.'),
  subject: yup.string().required('Subject is required'),
  lastName: yup.string(),
  message: yup.string().required('Please type your message')
});

const ContactForm = () => {
  const { mutate: register, isPending, formError, setFormError } = useRegister();

  function onSubmit({ email, subject, number, message }: ContactEmployerInput) {
    console.log({
      email,
      subject,
      number,
      message,
    });
  }

  return (
    <div className='py-2'>
      {/* <Alert
        variant="error"
        message={formError && formError}
        className="mb-6"
        closeable={true}
        onClose={() => setServerError(null)}
      /> */}
      <Form onSubmit={onSubmit} yupSchema={loginSchema}>
        <Input name='email' label='Email' type='email' inputClassName='bg-gray-100' />
        <Input name='subject' label='Subject ' type='text' />
        <Input name='lastName' label='Last Name' type='text' />
        <TextArea name='message' label='Message' />

        
        <Button
            className={clsx("flex justify-center mt-2 w-full rounded-xl bg-afrogreen py-[12px] text-base font-medium \
            text-neutral transition duration-200 hover:bg-dark active:bg-dark  \
            hover:cursor-pointer")} 
            type="submit" 
            disabled={isPending}
            onClick={() => setFormError(null)}
        >
            <span className='indicator-label'>Send Message</span>
        </Button>
      </Form>
    </div>
  )

}

export default ContactForm;