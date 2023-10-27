import React from 'react';
import Card from './Card';
import Divider from '../UI/Divider';
import Badge from '../UI/Badge';

const SkillsCard = () => {
    return (
        <Card
            bgColor='bg-green-600'
        >
            <h5 className='text-white font-semibold'>Skills</h5>
            <Divider
                color='bg-gradient-to-r from-transparent via-white to-transparent'
                className='my-3'
            />

            <div className="flex flex-wrap gap-1 text-xs">
                <Badge title='UI Design' textColor='text-green-600' bgColor='bg-white'  />
                <Badge title='Usability Testing' textColor='text-green-600' bgColor='bg-white'  />
                <Badge title='Photoshop' textColor='text-green-600' bgColor='bg-white'  />
                <Badge title='Project Management' textColor='text-green-600' bgColor='bg-white'  />
                <Badge title='Visual Communication' textColor='text-green-600' bgColor='bg-white'  />
                <Badge title='Figma' textColor='text-green-600' bgColor='bg-white'  />
                <Badge title='Sketch' textColor='text-green-600' bgColor='bg-white'  />
            </div>

        </Card>
    );
};

export default SkillsCard;