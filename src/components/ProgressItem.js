import React, { useState } from 'react';
import { Progress } from 'antd';
import { TiArrowSortedDown } from 'react-icons/ti';


const ProgressItem = ({name, percent, val, dec, color}) => {


    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className='my-6 mx-5'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <div style={{'backgroundColor': color}} className='w-6 h-6 rounded-full flex justify-center items-center'>
                    <TiArrowSortedDown size={20} color='white' />
                    </div>
                    <p className='ms-2'>{name}</p>
                    <p className=' bg-slate-100 ms-2 text-xs py-[2px] px-1 flex justify-center items-center poppins-medium'>%{percent}</p>
                </div>
                <div>
                    <p>${val}<span className="text-sm text-gray-500">.{dec}</span></p>
                </div>
            </div>
            <Progress strokeColor={color} percent={percent} showInfo={false} />
            {/* <Progress strokeColor={'#c084fc'} percent={70} showInfo={false} /> */}
        </div>
    )
}


export default ProgressItem;