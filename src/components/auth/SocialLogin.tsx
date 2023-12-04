import React from 'react';
import Image from 'next/image';
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import AppleLogo from '@/public/media/svg/brand-logos/facebook-4.svg'
import GoogleLogo from '@/public/media/svg/brand-logos/google-icon.svg'

const SocialLogin = () => {
  const searchParams = useSearchParams()!;
  let callbackUrl = searchParams.get("callbackUrl")!;

  if (callbackUrl === null) {
    callbackUrl = "/find-work/jobs";
  }
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        <div 
          onClick={() => signIn("google", { callbackUrl })}
          className="mb-2 md:my-4 mr-2 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-gray-100 hover:bg-gray-200 hover:cursor-pointer "
        >
          <div className="rounded-full text-xl">
            <Image
              alt='Google-Logo'
              src={GoogleLogo}
              className=''
              width={25}
              height={25}
            />
          </div>
          <h5 className="text-sm font-medium text-navy-700 ">
            Google Login
          </h5>
        </div>

        <div 
          onClick={() => signIn("facebook", { callbackUrl })}
          className="md:my-4 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-gray-100 hover:bg-gray-200 hover:cursor-pointer "
        >
          <div className="rounded-full text-xl">
            <Image
              alt='Google-Logo'
              src={AppleLogo}
              className=''
              width={25}
              height={25}
            />
          </div>
          <h5 className="text-sm font-medium text-navy-700">
            Facebook Login
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;