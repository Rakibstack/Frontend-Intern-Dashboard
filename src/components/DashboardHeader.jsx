
import { Plus } from 'lucide-react';
import React from 'react';

const DashboardHeader = () => {

    return (
        <div className='flex justify-between  items-center p-2'>
            <div>
                <h1 className="text-4xl font-medium mb-1">Dashboard</h1>
                <p className="text-[#4f7566] opacity-80">Plan, prioritize, and manage your tasks efficiently.</p>
            </div>
            <div className='md:flex '>
                <div className="bg-[#32785d] flex items-center  text-white/90 font-medium px-2 md:px-6 md:py-3 py-1 mb-2 md:mb-0 rounded-4xl mr-3 hover:bg-[#0F3D2E] duration-150 transition-all cursor-pointer">
                    <Plus width={20} className='mr-2 '></Plus>
                <button className='cursor-pointer'> Add Project</button>
                </div>
                <button className="text-[#1F7A57] border-2 bg-white font-medium border-[#1F7A57] px-2 md:px-6 md:py-3 py-1 rounded-4xl hover:text-white hover:bg-[#0F3D2E] transition-all duration-150  cursor-pointer">Import Data</button>
            </div>

        </div>
    );
};

export default DashboardHeader;