import React, { useState, useEffect } from 'react';
import ProgressItem from './ProgressItem';
import { BsArrowDownShort, BsArrowUpShort } from 'react-icons/bs';


const ProgressTabs = () => {


    const [activeTab, setActiveTab] = useState(1);
    const [arrowAnimate, setArrowAnimate] = useState(false);

    useEffect(() => {
        setArrowAnimate(true);
        setTimeout(() => {
            setArrowAnimate(false);
        }, 1000);

    }, [activeTab])

    const activeAnimation = () => {
        setArrowAnimate(true);
        setTimeout(() => {
            setArrowAnimate(false);
        }, 1000);
    }



    return (
        <div className='p-6'>
            <div className='flex'>
                <button className={activeTab === 1 ? 'tab-1 w-1/2 p-2 flex items-center border-b-2 border-black cursor-pointer transition-all duration-200 sxxl:border-b-4' : 'tab-1 w-1/2 p-2 flex items-center border-b-2 border-gray-200 cursor-pointer transition-all duration-200 sxxl:border-b-4'} onClick={() => { setActiveTab(1); activeAnimation() }}>
                    <div className={activeTab === 1 ? 'w-12 h-12 rounded-full flex flex-col justify-center items-center bg-black sxxl:h-16 sxxl:w-16' : 'w-12 h-12 rounded-full flex flex-col justify-center items-center bg-gray-200 overflow-hidden sxxl:h-16 sxxl:w-16'}>
                        <BsArrowDownShort className={arrowAnimate ? 'arrow-down tab-ani-down text-[30px] sxxl:text-5xl' : 'arrow-down text-[30px] sxxl:text-5xl'} color='white' />
                        <div className='w-[25px] h-[1px] rounded-full border-b-4 border-white'></div>
                    </div>
                    <div className='ms-4'>
                        <p className={activeTab === 1 ? 'poppins-medium text-sm text-gray-500' : 'poppins-medium text-sm text-gray-500'}>MONEY IN</p>
                        <p className={activeTab === 1 ? 'poppins-medium text-3xl text-black' : 'poppins-medium text-3xl text-gray-500'}>$5,083</p>
                    </div>
                </button>
                <div className={activeTab === 2 ? 'tab-2 w-1/2 p-2 flex items-center border-b-2 border-black cursor-pointer transition-all duration-200 sxxl:border-b-4' : 'tab-2 w-1/2 p-2 flex items-center border-b-2 border-gray-200 cursor-pointer transition-all duration-200 sxxl:border-b-4'} onClick={() => { setActiveTab(2); activeAnimation() }}>
                    <div className={activeTab === 2 ? 'w-12 h-12 rounded-full flex flex-col justify-center items-center bg-black sxxl:h-16 sxxl:w-16' : 'w-12 h-12 rounded-full flex flex-col justify-center items-center bg-gray-200 sxxl:h-16 sxxl:w-16'}>
                        <BsArrowUpShort className={arrowAnimate ? 'arrow-up tab-ani-up text-[30px] sxxl:text-5xl' : 'arrow-up text-[30px] sxxl:text-5xl'} color='white' />
                        <div className='w-[25px] h-[1px] rounded-full border-b-4 border-white'></div>
                    </div>
                    <div className='ms-4'>
                        <p className={activeTab === 2 ? 'poppins-medium text-sm text-black' : 'poppins-medium text-sm text-gray-500'}>MONEY OUT</p>
                        <p className={activeTab === 2 ? 'poppins-medium text-3xl text-black' : 'poppins-medium text-3xl text-gray-500'}>$485<span className={activeTab === 2 ? 'text-sm  text-black' : 'text-sm text-gray-500'}>.64</span></p>
                    </div>
                </div>
            </div>


            <ProgressItem name={'Stripe'} percent={70} val={'3,514'} dec={'72'} color={'#b9abf7'} />
            <ProgressItem name={'Crypto Academy'} percent={20} val={'1,017'} dec={'49'} color={'#94e5f7'} />
            <ProgressItem name={'Wire Return'} percent={6} val={'318'} dec={'44'} color={'#f0b0cc'} />
            {/* <div className='m-4'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div className='w-6 h-6 bg-purple-400 rounded-full'></div>
                        <p className='ms-2'>Stripe</p>
                        <p className=' bg-slate-100 ms-2 text-xs py-[2px] px-1 flex justify-center items-center poppins-medium'>%70</p>
                    </div>
                    <div>
                        <p>$3,514<span className="text-sm text-gray-500">.72</span></p>
                    </div>
                </div>
                <Progress strokeColor={'#c084fc'} percent={70} showInfo={false} />
            </div> */}



        </div>
    )
}


export default ProgressTabs;