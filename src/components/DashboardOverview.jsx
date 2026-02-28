
import { ArrowUpRight, ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const DashboardOverview = () => {

    const [overviewData, setOverviewData] = useState(null);

    useEffect(() => {

        const fetchOverviewData = async () => {
            try {
                const response = await fetch('https://task-api-eight-flax.vercel.app/api/overview');
                const data = await response.json();
                setOverviewData(data);
                console.log('Overview Data:', data);
            } catch (error) {
                console.error('Error fetching overview data:', error);
            }

        }
        fetchOverviewData();
    }, []);

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-1'>
            <div className='p-4 bg-[#32785d] rounded-2xl w-full h-auto '>
                <div className='flex justify-between items-center mb-2'>
                    <h2 className='text-[1.5rem] text-white font-bold'>Total Users</h2>
                    <span ><ArrowUpRight className='w-6 h-6 p-1 bg-white border rounded-full mr-1' /></span>
                </div>
                <h2 className='font-bold text-white text-5xl mb-2'>{overviewData?.totalUsers || 0}</h2>
                <div className='flex gap-2 items-center text-[#8dee26]'>
                    <div className=' border rounded-lg '>
                        <h2 className='ml-1 font-medium'>5 <ChevronUp className='w-4 h-4 inline-block mr-2 mb-1  ' /></h2>
                    </div>
                    <p className='text-sm'>Increased from last month</p>
                </div>

            </div>
            <div className='p-4 bg-white rounded-2xl w-full h-auto '>
                <div className='flex justify-between items-center mb-2'>
                    <h2 className='text-[1.5rem] font-bold'>Active Users</h2>
                    <span ><ArrowUpRight className='w-6 h-6 p-1 bg-white border rounded-full mr-1' /></span>
                </div>
                <h2 className='font-medium text-5xl mb-2'>{overviewData?.activeUsers || 0}</h2>
                <div className='flex gap-2 items-center text-green-700'>
                    <div className=' border rounded-lg '>
                        <h2 className='ml-1 font-medium'>5 <ChevronUp className='w-4 h-4 inline-block mr-2 mb-1  ' /></h2>
                    </div>
                    <p className='text-sm'>Increased from last month</p>
                </div>

            </div>
            <div className='p-4 bg-white rounded-2xl w-full h-auto '>
                <div className='flex justify-between items-center mb-2'>
                    <h2 className='text-[1.5rem] font-bold'>Revenue</h2>
                    <span ><ArrowUpRight className='w-6 h-6 p-1 bg-white border rounded-full mr-1' /></span>
                </div>
                <h2 className='font-medium text-5xl mb-2'>{overviewData?.revenue || 0}</h2>
                <div className='flex gap-2 items-center text-green-700'>
                    <div className=' border rounded-lg '>
                        <h2 className='ml-1 font-medium'>5 <ChevronUp className='w-4 h-4 inline-block mr-2 mb-1  ' /></h2>
                    </div>
                    <p className='text-sm'>Increased from last month</p>
                </div>

            </div>
            <div className='p-4 bg-white rounded-2xl w-full h-auto '>
                <div className='flex justify-between items-center mb-2'>
                    <h2 className='text-[1.5rem] font-bold'>Growth</h2>
                    <span ><ArrowUpRight className='w-6 h-6 p-1 bg-white border rounded-full mr-1' /></span>
                </div>
                <h2 className='font-medium text-5xl mb-2'>{overviewData?.growth || 0}</h2>
                <div className='flex gap-2 items-center text-green-700'>
                    <div className=' border rounded-lg '>
                        <h2 className='ml-1 font-medium'>5 <ChevronUp className='w-4 h-4 inline-block mr-2 mb-1  ' /></h2>
                    </div>
                    <p className='text-sm'>Increased from last month</p>
                </div>

            </div>

        </div>
    );
};

export default DashboardOverview;