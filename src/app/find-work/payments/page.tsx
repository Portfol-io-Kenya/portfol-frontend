import NumStat from '@/components/NumStat';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/UI/Button';
import BankCard from '@/components/cards/BankCard';
import Card from '@/components/cards/Card';
import DonutChart from '@/components/charts/DonutChart';
import LineChart from '@/components/charts/LineChart';
import { PaymentsTable } from '@/components/tables/PaymentsTable';
import React from 'react';

const Payments = () => {
    return (
        <div className='flex flex-col'>
            <SectionHeader title={'Payments'} className='pb-20' />

            <div className="flex gap-3 px-3 -mt-16">
                <div className="basis-2/3 flex flex-col gap-3">
                    <Card>
                        <h4 className='font-medium text-sm text-gray-500'>Account Balance</h4>
                        <h5 className='text-2xl font-bold text-gray-600'>$10,568.14</h5>

                        <div className="flex gap-3 mt-4">
                            <NumStat className='pl-3 pr-16 text-white' bgColor='bg-blue-400' textWhite titleStyle='text-lg text-white' value='20' description='Transactions' />
                            <NumStat className='pl-3 pr-16 text-white' bgColor='bg-green-400' textWhite titleStyle='text-lg text-white' value='$8,500.20' description='Income' />
                            <NumStat className='pl-3 pr-16 text-white' bgColor='bg-red-400' textWhite titleStyle='text-lg text-white' value='$34.20' description='Payments' />
                        </div>
                    </Card>

                    <Card>
                        <h5 className='font-medium'>Cash Flow</h5>
                        <LineChart />
                    </Card>

                    <Card>
                        <PaymentsTable />
                    </Card>

                </div>

                <div className="basis-1/3 flex flex-col gap-3">
                    <Card
                        image='url(/media/bgs/pattern-3.jpg)'
                        bgColor='bg-gradient-radial from-black/50 to-black/90'
                        className='text-white pb-10'
                    >

                        <h5 className='font-medium mb-10'>My Card Details</h5>

                        <BankCard />

                        <Button 
                            className='w-full bg-white/30 backdrop-blur border border-white/40'
                        >
                            Manage Wallet
                        </Button>
                    </Card>

                    <Card>
                        <h4 className='font-semibold text-sm'>Figure Breakdown</h4>
                        <DonutChart showLegend={true} />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Payments;