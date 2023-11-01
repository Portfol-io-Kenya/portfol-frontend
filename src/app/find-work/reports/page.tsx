import NumStat from '@/components/NumStat';
import OngoingProject from '@/components/OngoingProject';
import SimpleStat from '@/components/SimpleStat';
import Avatar from '@/components/UI/Avatar';
import HorizontalDivider from '@/components/UI/HorizontalDivider';
import ProgressBar from '@/components/UI/ProgressBar';
import Card from '@/components/cards/Card';
import { CounterCard } from '@/components/cards/CounterCard';
import GreetingCard from '@/components/cards/GreetingCard';
import NumberCard from '@/components/cards/NumberCard';
import StatCard from '@/components/cards/StatCard';
import BarChart from '@/components/charts/BarChart';
import DonutChart from '@/components/charts/DonutChart';
import LineChart from '@/components/charts/LineChart';
import RadialStrokedChart from '@/components/charts/RadialStrokedChart';
import Link from 'next/link';
import React from 'react';

const Reports = () => {
    return (
        <div className='flex flex-col'>
            <section className="flex gap-3">

                {/* col 1  */}
                <div className="basis-2/3 flex flex-col">
                    <GreetingCard />

                    <h5 className='mt-3 text-sm text-slate-600'>Performance Overview</h5>
                    <div className="flex gap-2 pt-2 mb-3">
                        <StatCard color='from-pink-500 to-pink-300' title='Earnings' value='$256.12' />
                        <StatCard color='from-purple-500 to-purple-300' title='Views' value='$256.12' />
                        <StatCard color='from-green-600 to-green-400' title='Proposals' value='$256.12' />
                        <StatCard color='from-orange-500 to-orange-300' title='Growth' value='$256.12' />
                    </div>

                    <div className="flex grow gap-2">
                        <div className="basis-2/3 flex flex-col">
                            <Card grow className='flex flex-col grow' >
                                <h5>Sales Overview</h5>
                                <LineChart />
                            </Card>
                        </div>

                        <div className="basis-1/3 flex flex-col grow">
                            <Card grow className='flex flex-col grow justify-between'>
                                <h5>Your Profile</h5>
                                <DonutChart />
                                <div className="flex justify-center">
                                    <SimpleStat value='1000' title='Profile Views' />
                                    <HorizontalDivider className='mx-1'/>
                                    <SimpleStat value='500' title='Engagements' />
                                    <HorizontalDivider className='mx-1'/>
                                    <SimpleStat value='80%' title='Compeleted' />
                                </div>
                            </Card>
                        </div>
                        
                    </div>   
                </div>

                {/* col 2 */}
                <div className="basis-1/3 flex flex-col">
                    <Card grow className='flex flex-col grow justify-between'>
                        <section>
                            <h4 className='font-semibold mb-3'>Scope Calculator</h4>
                            <select className='bg-gray-200 rounded text-sm text-green-600 py-2 px-3 w-full outline-none'>
                                <option selected>Choose Project</option>
                                <option>Safari Website</option>
                                <option>Copywriting</option>
                                <option>Swahili Translation</option>
                            </select>
                        </section>

                        <section>
                            <RadialStrokedChart />
                            <h5 className='font-[600] text-2xl text-green-600 text-center -mt-16'>$2,500</h5>
                            <p className='text-center text-sm text-slate-500'>
                                Based on market trends, this is the recommended offer for 
                                <Link 
                                    href="/find-work/jobs/1"
                                    className='text-green-600'
                                > Safari Website UI</Link>.
                            </p>
                        </section>


                        <section className='mt-3 flex gap-3'>
                            <NumStat title='Estimated Hours' value='20' description='at $25 an hour' />
                            <NumStat title='Estimated Skill Index' value='5.9' description='Moderately Skilled'/>
                        </section>
                       

                        

                    </Card>
                </div>
            </section>

            <section className="flex mt-3 gap-2">
                <div className="basis-2/5 flex flex-col">
                    <Card grow className='flex flex-col grow'>
                        <BarChart chartHeight={180} />
                    </Card>
                </div>
                <div className="basis-1/5 flex flex-col">
                    <CounterCard
                        className='flex flex-col h-full'
                        description='Undertaken Projects'
                        count={28}
                        // isLoading={isLoading}
                    />
                </div>

                <div className="basis-2/5 flex flex-col">
                    <Card grow className='flex flex-col grow'>
                        <h5 className='text-sm font-semibold mb-3'>Ongoing Projects</h5>
                        <div className="flex flex-col gap-2">
                            <OngoingProject img='url(/media/bgs/pattern-3.jpg)' title='Safari Website' location='Nairobi, Kenya' completion='70%' />
                            <OngoingProject img='url(/media/bgs/pattern-4.jpg)' title='Copywriting' location='Harare, Zimbabwe' completion='30%'/>
                        </div>
                    </Card>
                </div>
            </section>
            
        </div>
    );
};

export default Reports;