"use client"
import * as React from 'react';
import clsx from 'clsx';
import Button from '../UI/Button';
import * as yup from 'yup';
import { ContactEmployerInput, RegisterUserInput, SubmitJobInput } from '@/types';
import Form from '../forms/form';
import Input from '../forms/input';
import { useRegister } from '@/rest-api/auth';
import YupPassword from 'yup-password'
import TextArea from '../forms/text-area';
import { useUploads } from '@/rest-api/settings';
import FileInput from '../forms/file-input';

YupPassword(yup) // extend yup


const loginSchema = yup.object().shape({
    title: yup.string().required('Job Title is required.'),
    description: yup.string().required('Please type the description'),
    subject: yup.string().required('Subject is required'),
    lastName: yup.string()
});

const SubmitJobForm = () => {
  const { mutate: register, isPending } = useUploads({});

  function onSubmit({ jobTitle, jobDescription }: SubmitJobInput) {
    console.log({
      jobTitle,
      jobDescription
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
        <FileInput name='upload' label="Featured Image" />
        <Input dimension='big' name='jobTitle' label='Job Title' type='text' className='mb-10' />
        <TextArea name='jobDescription' label='Job Description' inputClassName='mb-10' />

        <Input dimension='big' name='jobCategory' label='Category' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='jobType' label='Type' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='minSalary' label='Min Salary' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='maxSalary' label='Max Salary' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='tag' label='Tag' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='gender' label='Gender' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='apply_type' label='Application Type' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='external_url' label='External URL for Job Application' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='apply_email' label='Application Email' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='salary_type' label='Salary Type' type='text' className='w-1/2 float-right pl-4 mb-10' />


        <Input dimension='big' name='experience' label='Experience' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='careerLevel' label='Career Level' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <Input dimension='big' name='qualification' label='Qualification' type='text' className='w-1/2 float-left pr-4 mb-10' />
        <Input dimension='big' name='introVideo' label='Intro Video URL' type='text' className='w-1/2 float-right pl-4 mb-10' />

        <FileInput name='photos' label="Photos" />
        <Input dimension='big' name='deadline' label='Application Deadline Date' type='text' className='mb-10' />
        <Input dimension='big' name='address' label='Address' type='text' className='mb-10' />
        <Input dimension='big' name='location' label='Location' type='text' className='mb-10' />
        <Input dimension='big' name='mapsLocation' label='Maps Location' type='text' className='mb-10' />

        

        
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

export default SubmitJobForm;