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
import Card from '../../cards/Card';

YupPassword(yup) // extend yup


const loginSchema = yup.object().shape({
    title: yup.string().required('Job Title is required.'),
    description: yup.string().required('Please type the description'),
    subject: yup.string().required('Subject is required'),
    lastName: yup.string()
});

const MyProfile = () => {
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
        <FileInput name='upload' label="Profile Image" />

        <Input dimension='big' name='fullName' label='Full Name' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='dob' label='Date of Birth' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='gender' label='Gender' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='age' label='Age' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='category' label='Category' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='type' label='Type' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='phone' label='Phone Number' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='email' label='Email' type='email' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='qualification' label='Qualification' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='experience' label='Experience Time' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='languages' label='Languages' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='salary_type' label='Salary Type' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='salary' label='Salary ($)' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='categories' label='Categories' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='showProfile' label='Show my Profile ($)' type='text' className='w-1/2 pr-4 mb-10' />
        {/* <Input dimension='big' name='categories' label='Categories' type='text' className='w-1/2 float-right pl-4 mb-10' /> */}

        <Input dimension='big' name='jobTitle' label='Job Title' type='text' className='mb-10' />
        <TextArea name='description' label='Job Description' inputClassName='mb-10' />

        

        
        <Button
            className={clsx("flex justify-center mt-2 w-full rounded-xl bg-afrogreen py-[12px] text-base font-medium \
            text-neutral transition duration-200 hover:bg-dark active:bg-dark  \
            hover:cursor-pointer")} 
            type="submit" 
            disabled={isPending}
            // onClick={}
        >
            <span className='indicator-label'>Submit Job</span>
        </Button>
      </Form>
    </div>
  )

}

export default MyProfile;