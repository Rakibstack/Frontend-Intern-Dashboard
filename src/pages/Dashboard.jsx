import { Bell, CircleUserRound, Donut, Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardOverview from '../components/DashboardOverview';

const Dashboard =  () => {

   const userId = localStorage.getItem('userId');
   const [user, setUser] = useState(null)

    useEffect( () => {

        if(!userId) return;

        const fetchUser = async () => {
            try{
                const res = await fetch(`https://task-api-eight-flax.vercel.app/api/users/${userId}`);

                if(!res.ok){
                    throw new Error("Failed to fetch user data");
                }
                const data = await res.json();
                setUser(data);
            }
            catch(error){
                console.error(error.message);
            }
        }
           fetchUser();

    },[userId])

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar p-2 rounded-2xl ml-2 mt-2 bg-base-300">
                    {/* side drawer icon */}
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    <div className=' md:flex justify-between items-center w-full pr-6'>
                        <div>
                            <label className="input rounded-4xl border-none">
                                <svg className="h-[1.5em] text-black opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search Task" />
                            </label>
                        </div>
                        <div className='mt-4 md:mt-0 flex gap-3 items-center  justify-center'>
                            <span className='p-3 bg-gray-50 rounded-full'><Mail width={20} height={20} className="text-gray-600" /></span>
                            <span className='p-3 bg-gray-50 rounded-full'><Bell width={20} height={20} className="text-gray-600" /></span>
                            <div className='flex items-center justify-center gap-2'>
                                <img src={user?.avatar || ''} alt="User Avatar" className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <h2 className='font-bold'>{user?.name || 'Guest User'}</h2>
                                    <p>{user?.email || 'No Email'}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </nav>
                {/* Page content here */}
                <div className="p-4 mt-2 ml-2 rounded-2xl bg-base-300 min-h-screen">

                   <DashboardHeader></DashboardHeader>
                   <DashboardOverview></DashboardOverview>


                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        <div className='py-4 relative is-drawer-close:hidden'>
                      <h2 className=" text-center text-2xl font-bold text-[#0F3D2E] ">  DONEZO</h2>
                      <span className='absolute left-7 bottom-3 '><Donut width={38} height={38} className="text-[#1F7A57] -rotate-48" /></span>

                        </div>
                        <span className= 'is-drawer-close:hidden mt-5 ml-4 mb-2 text-gray-500'>Menu</span>
                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard">
                                {/* Dashboard icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className='text-[#117d54]' stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                                <span className="is-drawer-close:hidden font-bold ">Dashboard</span>
                            </button>
                        </li>
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Tasks">
                                {/* Tasks icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check-big-icon lucide-square-check-big"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"/><path d="m9 11 3 3L22 4"/></svg>
                                <span className="is-drawer-close:hidden ">Tasks</span>
                            </button>
                        </li>
                        
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Calender">
                                {/* Calender icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days-icon lucide-calendar-days"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                                <span className="is-drawer-close:hidden ">Calender</span>
                            </button>
                        </li>
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Analytics">
                                {/* Analytics icon */}
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>
                                <span className="is-drawer-close:hidden ">Analytics</span>
                            </button>
                        </li>
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Team">
                                {/* Team icon */}
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
                                <span className="is-drawer-close:hidden ">Team</span>
                            </button>
                        </li>
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Help">
                                {/* Help icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-life-buoy-icon lucide-life-buoy"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
                                <span className="is-drawer-close:hidden ">Help</span>
                            </button>
                        </li>
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Logout">
                                {/* Logout icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-out-icon lucide-log-out"><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
                                <span className="is-drawer-close:hidden ">Logout</span>
                            </button>
                        </li>

                        {/* List item */}
                        <li>
                            <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                {/* Settings icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                                <span className="is-drawer-close:hidden">Settings</span>
                            </button>
                        </li>
                    </ul>
                    <div className='is-drawer-close:hidden p-4 mb-2 mx-auto bg-[#0F3D2E] text-white w-54 h-52 rounded-2xl'>
                        <span className='mb-1'><Donut width={26} height={26} className="text-[#1F7A57] bg-white rounded-full p-1 w-6 h-6 -rotate-48" /></span>
                        <h4 className="text-xl "> <span className='font-bold'>Download</span> Our Mobile App</h4>
                        <p className='text-sm mt-1 opacity-85'>Get easy in another way</p>
                        <button className="text-white text-sm font-medium bg-[#1F7A57]  px-4 py-3 rounded-2xl w-full  mt-8">Download</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;