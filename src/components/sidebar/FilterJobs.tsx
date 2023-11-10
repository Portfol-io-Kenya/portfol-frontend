"use client"
import React, { useState } from 'react';
import Card from '../cards/Card';
import Select from '../UI/dropdowns/Select';
import CheckboxGroup from '../forms/checkbox/checkbox-group';
import Checkbox from '../forms/checkbox/checkbox';
import RangeSlider from '../forms/range-slider';

const skills = [
    {id:'1', name:'Entry Level'},
    {id:'2', name:'Intermediate'},
    {id:'3', name:'Expert'},
]

const jobTypes = [
    {id:'1', name:'Full Time'},
    {id:'2', name:'Part Time'},
    {id:'3', name:'Remote'},
]

const rates = [
    {id:'1', name:'Under $500'},
    {id:'2', name:'$500 - $1,000'},
    {id:'3', name:'$1,000 - $2,500'},
    {id:'4', name:'Custom'},
]

const marks = {
    0: <strong>$50</strong>,
    50: '$5000',
    100: <strong>$10k</strong>
  };

const FilterJobs = () => {
    const [range, setRange] = useState([]);
    return (
        <div className="basis-1/4 sticky top-[90px] h-[calc(100vh-100px)] flex flex-col">
            <Card 
                customClass='h-full'
                className='h-full'
            >
                <h4 className='font-semibold text-slate-700 mb-4'>Filter</h4>
                <h6 className='text-sm font-medium'>Locations</h6>
                <Select />

                <h6 className='text-sm font-medium mt-6 mb-1'>Experience Level</h6>
                {skills.map((skill) => (
                    <Checkbox 
                        key={skill.id} 
                        name={skill.name} 
                        label={skill.name} 
                        inputClass='mr-2 accent-green-600 bg-green-500 text-white rounded-lg'
                    />
                ))}


                <h6 className='text-sm font-medium mt-6 mb-1'>Experience Level</h6>
                {jobTypes.map((item) => (
                    <Checkbox 
                        key={item.id} 
                        name={item.name} 
                        label={item.name} 
                        inputClass='mr-2 accent-green-600 bg-green-500 text-white rounded-lg'
                    />
                ))}


                <h6 className='text-sm font-medium mt-6 mb-1'>Experience Level</h6>
                {rates.map((item) => (
                    <Checkbox 
                        key={item.id} 
                        name={item.name} 
                        label={item.name} 
                        inputClass='mr-2 accent-green-600 bg-green-500 text-white rounded-lg'
                    />
                ))}
                <RangeSlider 
                    range min={0} 
                    marks={marks} 
                    onChange={(val: any)=>setRange(val)} 
                    defaultValue={[0, 40]} 
                    className='mt-2 '
                />

                <div className='flex justify-center gap-1 mt-8 text-xs text-slate-400'>
                    <p>{range[0] ? `$${range[0]} - ` : '$0 - '}</p>
                    <p>{range[1] ? `$${Number(range[1])/100*10000}` : '$1000'}</p>
                </div>

                
                

            </Card>
        </div>
    );
};

export default FilterJobs;