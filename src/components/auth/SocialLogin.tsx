import Image from 'next/image';
import React from 'react';
import AppleLogo from '@/public/media/svg/brand-logos/apple-black.svg'
import GoogleLogo from '@/public/media/svg/brand-logos/google-icon.svg'

const SocialLogin = () => {
    return (
        <div>
            <div className='flex'>
            <div className="my-4 mr-2 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-gray-100 hover:bg-gray-200 hover:cursor-pointer ">
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
                Sign In with Google
              </h5>
            </div>

            <div className="my-4 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-gray-100 hover:bg-gray-200 hover:cursor-pointer ">
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
                Sign In with Apple
              </h5>
            </div>
          </div>
        </div>
    );
};

export default SocialLogin;