import React from 'react';

const Awards = () => {
    return (
        <div className="flex gap-8">
            <div className="flex flex-col gap-2 items-center py-2">
                <div className="font-bold bg-primary/30 px-3 py-2 rounded">B</div>
            </div>
            <div className="flex flex-col pb-10">
                <div className="flex items-center gap-3">
                    <h3 className='font-semibold text-lg'>Perfect Attendance Programs</h3>
                    <p className='text-sm text-primary font-medium'>2012 - 2016</p>
                </div>
                
                <p className='text-slate-500 text-sm mt-5'>
                    Mauris nec erat ut libero vulputate pulvinar. Aliquam ante erat, blandit at pretium et, accumsan 
                    ac est. Integer vehicula rhoncus molestie.
                </p>
            </div>
        </div>
    );
};

export default Awards;