import SectionHeader from '@/components/SectionHeader';
import Card from '@/components/cards/Card';
import SubmitJobForm from '@/components/employer/SubmitJobForm';
import React from 'react';

const SubmitJob = () => {
    return (
        <div className='flex flex-col gap-3'>
            <SectionHeader title={'Submit Job'}/>
            <Card>
                <SubmitJobForm />
            </Card>
        </div>
    );
};

export default SubmitJob;