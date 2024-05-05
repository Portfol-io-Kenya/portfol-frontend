import IconText from '@/components/IconText';
import SectionHeader from '@/components/SectionHeader';
import Avatar from '@/components/UI/Avatar';
import ShortlistedJob from '@/components/candidate/ShortlistedJob';
import Card from '@/components/cards/Card';
import React from 'react';

const ShortlistedJobs = () => {
    return (
        <div className='flex flex-col gap-3'>
            <SectionHeader title={'Submitted Jobs'} />
            <Card>
                <div className="bg-gray-200 flex p-3 rounded font-medium text-primary">
                    <div className="basis-3/6">Job Title</div>
                    <div className="basis-1/6">Date Added</div>
                    <div className="basis-1/6">Status</div>
                    <div className="basis-1/6">Action</div>
                </div>

                <ShortlistedJob />
                <ShortlistedJob />
                <ShortlistedJob />

            </Card>
        </div>
    );
};

export default ShortlistedJobs;