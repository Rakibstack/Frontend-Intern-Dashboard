import { Video } from "lucide-react";
import React, { useEffect, useState } from "react";

const DashboardMiddleSection = () => {

    const [product, setProduct] = useState([])

    const analytics = [
        { day: "S", h: 70, active: false },
        { day: "M", h: 110, active: true },
        { day: "T", h: 100, active: false },
        { day: "W", h: 120, active: true },
        { day: "T", h: 100, active: false },
        { day: "F", h: 100, active: false },
        { day: "S", h: 80, active: false },
    ];

    useEffect(() => {

     const fetchProduct = async () => {

        const res = await fetch('https://task-api-eight-flax.vercel.app/api/products')
        const data = await res.json()
        // console.log('product data',data);
        
        setProduct(data)
        }
        fetchProduct()
    }, [])

    return (
        <div className="grid grid-cols-12 mt-3  gap-6">

            <div className="col-span-12 lg:col-span-6  bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="text-lg font-semibold mb-6">Project Analytics</h3>

                <div className="flex items-end justify-between md:h-[150px]">
                    {analytics.map((item, i) => (
                        <div key={i} className="flex flex-col items-center w-full">
                            <div className="flex items-end h-full">
                                <div
                                    style={{ height: `${item.h}px` }}
                                    className={`w-8 rounded-full transition-all duration-300
                    ${item.active
                                            ? "bg-[#1F7A57]"
                                            : "border-2 border-dashed border-[#1F7A57]/40"
                                        }`}
                                />
                            </div>

                            {item.active && (
                                <span className="text-xs text-[#1F7A57] font-semibold mt-1">
                                    74%
                                </span>
                            )}

                            <span className="text-sm text-gray-500 mt-1">{item.day}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-span-12 lg:col-span-3 bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold mb-3">Reminders</h3>

                    <h4 className="text-[#0F3D2E] font-bold text-xl leading-snug">
                        Meeting with Arc Company
                    </h4>

                    <p className="text-gray-500 text-sm mt-2">
                        Time: 02:00 pm - 04:00 pm
                    </p>
                </div>

                <button className="mt-6 flex justify-center items-center bg-[#1F7A57] hover:bg-[#0F3D2E] text-white py-3 rounded-xl font-semibold transition">
                 <Video className="mr-2" />   Start Meeting
                </button>
            </div>

            <div className="col-span-12 lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-semibold">Project</h3>
                    <button className="text-sm text-[#1F7A57] font-medium px-3 py-1 rounded-lg border border-[#1F7A57] ">
                        + New
                    </button>
                </div>

                <div className="space-y-4">
                    {product.map((p, i) => (
                        <div key={i} className="flex gap-3">
                            <span className="w-2.5 h-2.5 mt-1.5 rounded-full bg-[#1F7A57]" />

                            <div>
                                <h4 className="text-sm font-semibold text-gray-800">
                                    {p.name}
                                </h4>
                                <p className="text-xs text-gray-500">
                                    Category: {p.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DashboardMiddleSection;