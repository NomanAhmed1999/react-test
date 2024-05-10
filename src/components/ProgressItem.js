import React from 'react';
import { Progress } from 'antd';
import { TiArrowSortedDown } from 'react-icons/ti';


const ProgressItem = ({ name, percent, val, dec, color }) => {



    return (
        <div className='my-6 mx-5'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <div style={{ 'backgroundColor': color }} className='w-6 h-6 rounded-full flex justify-center items-center sxxl:w-8 sxxl:h-8'>
                        <TiArrowSortedDown className='text-[20px] sxxl:text-[40px]' color='white' />
                    </div>
                    <p className='ms-2 sxxl:text-2xl'>{name}</p>
                    <p className=' bg-slate-100 ms-2 text-xs py-[2px] px-1 flex justify-center items-center poppins-medium sxxl:text-md sxxl:ms-2'>%{percent}</p>
                </div>
                <div>
                    <p className='sxxl:text-lg'>${val}<span className="text-sm text-gray-500">.{dec}</span></p>
                </div>
            </div>
            <Progress strokeColor={color} percent={percent} showInfo={false} />
        </div>
    )
}


export default ProgressItem;