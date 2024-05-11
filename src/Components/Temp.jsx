import React from 'react'
import { TfiLocationPin } from "react-icons/tfi";
import { IoMoonOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";

const Temp = ({ setCity, stats }) => {
    const handleCity = (e) => {
        // console.log(e.target.value)
        setCity(e.target.value)
    }

    return (
        <>
            <div className='flex justify-between'>
                <input
                    type='text'
                    className='w-60 p-2 placeholder-slate-800 text-xl bg-slate-400 border border-slate-500 focus:outline-none focus:border-slate-400'
                    placeholder='Enter Your City Name'
                    onChange={handleCity}
                    defaultValue="Hyderabad"
                />
                <TfiLocationPin
                    className='w-12 h-12 p-2 mr-2 text-white text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out' />
            </div>

            <div className='flex justify-between'>
                {stats.isDay !== 0 ? (
                    <BsSun className='w-full h-20 p-2 mt-4 text-yellow-500 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out' />

                ) : (
                    <IoMoonOutline className='w-full h-20 p-2 mt-4 text-slate-300 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out' />

                )}
            </div>

            <div className='flex justify-center'>
                <p className='font-semibold text-[50px] text-slate-400 text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out'>{stats.temp}
                    <span className='text-[35px]'>°C</span>
                </p>
            </div>

            <div className='flex justify-center items-center text-slate-300 mt-8 text-[25px] text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out'>{stats.condition}</div>

            <div className='flex flex-col justify-center text-slate-400 mt-5 text-[25px] '>Today, {stats.time}
                <span className='flex justify-center'> {stats.location}</span>
            </div>
        </>
    )
}

export default Temp
