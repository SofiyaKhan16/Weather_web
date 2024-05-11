import React from 'react'
import { TbDirectionSign } from "react-icons/tb";


const Detail = ({ stats }) => {
    return (
        <>
            <div className=' bg-slate-500 text-slate-200 py-2 flex flex-col justify-start items-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer'>

                <h2 className=''>{stats.title}</h2>

                <div>
                    <span className='text-[35px] font-bold'>{stats.value}</span>
                    <span className='text-[25px] ms-1'>{stats.unit}</span>
                </div>

                {stats.direction ? (
                    <div className='flex'>
                        <TbDirectionSign className='w-full h-8' />
                        <span className='text-[20px]'>{stats.direction}</span>
                    </div>
                ) : null
                }

                { stats.title =="Humidity" ? (
                <div className='w-[70%] mt-3' >
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                        <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: `${stats.value}%` }}></div>
                    </div>
                </div>
                ): null
                }

            </div>
        </>
    )
}

export default Detail
