import React from 'react';
import Avatar from '../UI/Avatar';
import IconText from '../IconText';
import Divider from '../UI/Divider';
import Link from 'next/link';

const ShortlistedJob = () => {
    return (
        <div>
            <div className="flex pt-3">
                <div className="flex basis-3/6 items-center">
                    <div className="flex">
                        <Avatar img='url(/media/bgs/pattern-7.jpg)' className={'mr-5 bg-no-repeat'}/>
                    </div>
                    <div className="flex flex-col">
                        <Link href={'/find-work/'}>
                            <p className='font-medium hover:text-secondary'>Senior Software Engineer</p>   
                        </Link>
                        <div className="flex gap-6 my-2">
                            <IconText icon='iconly-Work' title='Application'/>
                            <IconText icon='iconly-Location' title='Nairobi, Kenya'/>
                        </div>  
                    </div>
                </div>
                <div className="flex basis-1/6 items-center text-slate-400">Dec 5, 2023</div>
                <div className="flex basis-1/6 items-center text-secondary">Active</div>
                <div className="flex basis-1/6 gap-2 items-center">
                    <i className='iconly-Show icbo bg-afrogreen/30 text-afrogreen p-1 rounded text-xl'></i>
                    <i className='iconly-Delete icbo bg-red-500/30 text-red-500 p-1 rounded text-xl'></i>
                </div>
            </div>
            <Divider className='mt-4' />
        </div>
    );
};

export default ShortlistedJob;