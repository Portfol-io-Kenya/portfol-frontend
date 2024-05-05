"use client"
import * as React from 'react';
import clsx from 'clsx';
import Button from '../../UI/Button';
import * as yup from 'yup';
import { ContactEmployerInput, RegisterUserInput } from '@/types';
import Form from '../../forms/form';
import Input from '../../forms/input';
import { useRegister } from '@/rest-api/auth';
import YupPassword from 'yup-password'
import TextArea from '../../forms/text-area';
import { useUploads } from '@/rest-api/settings';
import FileInput from '../../forms/file-input';

YupPassword(yup) // extend yup


const loginSchema = yup.object().shape({
    title: yup.string().required('Job Title is required.'),
    description: yup.string().required('Please type the description'),
    subject: yup.string().required('Subject is required'),
    lastName: yup.string()
});

const SocialNetwork = () => {
  const { mutate: register, isPending } = useUploads({});

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

        <Input dimension='big' name='jobTitle' label='Job Title' type='text' className='mb-10' />
      </Form>
    </div>
  )

}

export default SocialNetwork;