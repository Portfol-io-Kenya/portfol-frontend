"use client"
import * as React from 'react';
import {
  Formik,
  withFormik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  FormikErrors
} from 'formik';
import clsx from 'clsx';
import InputField from './InputField';
import Link from 'next/link';
import Image from 'next/image';
import { toAbsoluteUrl } from '@/lib';
import AppleLogo from '../../../public/media/svg/brand-logos/apple-black.svg'
import GoogleLogo from '../../../public/media/svg/brand-logos/google-icon.svg'
import { useRouter } from 'next/navigation';
import Button from '../UI/Button';
import SocialLogin from './SocialLogin';

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = (props: FormikProps<FormValues>) => {
    const { touched, errors, isSubmitting } = props;
    const router = useRouter();
    return (
      <Form>
        {/* begin::Form group */}
        <div className=''>
            <label className='text-sm text-navy-700'>Email Address:</label>
            <InputField type='email' name='email' touched={touched.email} errors={errors.email} />
        </div>
        {/* end::Form group */}

        {/* begin::Form group */}
        <div className=''>
            <label className='text-sm text-navy-700'>Password:</label>
            <InputField type='password' name='password' touched={touched.password} errors={errors.password} />
        </div>
        {/* end::Form group */}

        {/* begin::Wrapper */}
      <div className='flex flex-stack flex-wrap text-cyan-600 text-base font-semibold mb-3'>
        <div />

        {/* begin::Link */}
        <div className="mb-4 flex items-center justify-between px-2">
          <Link
            href='#'
            className="text-sm font-medium text-brand-500 hover:text-brand-600"
          >
            Forgot Password?
          </Link>
        </div>
        {/* end::Link */}
      </div>
      {/* end::Wrapper */}

      {/* this is a temporary fake signin */}
        <Button
            className={clsx("flex justify-center mt-2 w-full rounded-xl bg-green-600 py-[12px] text-base font-medium \
            text-white transition duration-200 hover:bg-dark active:bg-dark  \
            hover:cursor-pointer")} 
            type="submit" 
            disabled={isSubmitting}
            onClick={() => router.push('/find-work/jobs')}
        >
            
            <span className='indicator-label'>Sign In</span>
        </Button>

        <div className='mt-1 text-gray-500 text-center text-sm'>
            <Link href='/auth/signup'>
              No account yet?{' '} <span className='text-green-500'>Sign Up</span>
            </Link>
        </div>
      </Form>
    );
  };

interface MyFormProps {
    initialEmail?: string;
}

const FormWrapper = withFormik<MyFormProps, FormValues>({
    // Transform outer props into form values
    mapPropsToValues: props => {
      return {
        email: props.initialEmail || '',
        password: '',
      };
    },
  
    // Add a custom validation function (this can be async too!)
    validate: (values: FormValues) => {
      let errors: FormikErrors<FormValues> = {};
      if (!values.email) {
        errors.email = 'Required';
      } 
    //   else if (!isValidEmail(values.email)) {
    //     errors.email = 'Invalid email address';
    //   }
      return errors;
    },
  
    handleSubmit: values => {
      // do submitting things
    },
})(LoginForm);

const Login = () => {
    return (
        <div className='py-2'>
          <h2 className="text-center mb-3 text-lg font-bold tracking-tight text-gray-900">
              Sign in to your account
          </h2>

          {/* begin::Login options */}
          <SocialLogin />
      
          {/* end::Login options */}
        <FormWrapper/>
        </div>
    )
}

export default Login;