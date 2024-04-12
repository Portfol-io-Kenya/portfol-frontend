import React from 'react';

const Experience = () => {
    return (
        <div className="flex gap-8">
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="font-bold bg-primary/30 px-3 py-2 rounded">B</div>
                <div className="h-full w-[1px] border-l border-primary border-dashed mb-2"></div>
            </div>
            <div className="flex flex-col py-2 pb-10">
                <div className="flex items-center gap-3">
                    <h3 className='font-semibold text-lg'>Web Designer</h3>
                    <p className='text-sm text-primary font-medium'>01/01/2012 - 31/12/2016</p>
                </div>

                <div className="text-primary font-medium">Webrako</div>
                
                <p className='text-slate-500 text-sm mt-5'>
                    Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan 
                    ac est. Integer vehicula rhoncus molestie.
                </p>
            </div>
        </div>
    );
};

export default Experience;