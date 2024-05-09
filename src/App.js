import './App.css';
import { FaDropbox, FaEllipsisH, FaStarOfLife, FaStripeS } from 'react-icons/fa';
import Header from './components/Header';
import { FiArrowUpRight } from 'react-icons/fi';
import { RiArrowRightUpFill } from 'react-icons/ri';
import { IoEyeSharp } from 'react-icons/io5';
import { IoMdAdd } from 'react-icons/io';
import { GiPolarStar } from 'react-icons/gi';
import GraphBox from './components/GraphBox';
import { TbTopologyStar2 } from 'react-icons/tb';
import TransactionTableItem from './components/TransactionTableItem';
import ProgressTabs from './components/ProgressTabs';
import { SiZendesk } from 'react-icons/si';
import { SlSocialSpotify } from 'react-icons/sl';
import trIcon1 from './images/tr-icon1.png';
import trIcon2 from './images/tr-icon2.png';
import trIcon3 from './images/tr-icon3.png';
import baIcon1 from './images/ba-icon1.png';
import baIcon2 from './images/ba-icon2.png';
import baIcon3 from './images/ba-icon3.png';
import bSaveImage1 from './images/b-save-icon1.png';
import bSaveImage2 from './images/b-save-icon2.png';
import bSaveImage3 from './images/b-save-icon3.png';
function App() {
  return (
    <div className='bg-slate-950 w-full h-[65vh]'>
      <Header />


      <div className='px-28 py-16'>
        <p className='text-white text-sm'>TOTAL BALANCE</p>
        <div className='flex justify-between items-center'>
          <div className='flex items-end'>
            <p className='text-white text-5xl mt-2'>$36,254</p>
            <div className='bg-lime-500 rounded-full py-[2px] px-2 ms-8'>
              <RiArrowRightUpFill />
            </div>
            <p className='text-white ms-2'>$328.32 Today, Feb 15</p>
          </div>
          <div className='flex items-center'>
            <button className='flex items-center'>
              <IoEyeSharp className='text-slate-400' size={20} />
              <p className='text-slate-400 ms-4'>View Analytics</p>
            </button>
            <div className="w-[1px] h-8 bg-slate-700 mx-4"></div>
            <button className='flex items-center p-1 px-4 bg-indigo-500'>
              <FiArrowUpRight color='#fff' size={20} />
              <p className='text-white ms-2'>Send Money</p>
            </button>
            <button className='flex items-center p-1 px-4 bg-slate-900 ms-4'>
              <IoMdAdd color='#fff' size={20} />
              <p className='text-white ms-2'>Add Money</p>
            </button>
            <button className='flex items-center p-3 bg-slate-900 ms-4 rounded-full'>
              <FaEllipsisH color='#fff' />
            </button>
          </div>
        </div>
        <div className='flex items-center mt-8'>
          <div className='bg-slate-600 rounded-full p-2'>
            <GiPolarStar color='#fff' />
          </div>
          <p className='text-white ms-2'>Overview</p>
          <p className='text-slate-600 ms-2 text-sm'>Last 30 days</p>
        </div>

        <div className='flex justify-between gap-4 mt-8 overflow-x-hidden overflow-y-hidden'>
          <GraphBox name={'BUSINESS ACCOUNT'} perc={12.3} amount={'$33,842'} isExpand={true} iconInit={baIcon1} iconProcess={baIcon2} iconFinished={baIcon3} />
          <GraphBox name={'TAX RESERVE'} perc={-2.1} amount={'$700.00'} isExpand={false} iconInit={trIcon1} iconProcess={trIcon2} iconFinished={trIcon3} />
          <GraphBox name={'BUSINESS SAVINGS'} perc={12.3} amount={'$1,623'} isExpand={false} iconInit={bSaveImage1} iconProcess={bSaveImage2} iconFinished={bSaveImage3} />
        </div>

        <div className='mt-12 bg-white h-[40vh] flex justify-between'>
          <div className='w-[48%]'>
            <div className='flex justify-between items-center h-8'>
              <div className='flex items-center'>
                <TbTopologyStar2 size={20} />
                <p className='text-lg ms-2 poppins-semibold'>Recent Transactions</p>
                <p className='text-slate-400 ms-2 text-sm'>Last 5 activity</p>
              </div>
              <p className='text-indigo-500 ms-2 text-sm cursor-pointer poppins-medium'>See All</p>
            </div>
            <div className='w-full h-[2px] bg-gray-200 mt-4'></div>
            {/* <FaStripeS /> */}

            <TransactionTableItem name={'Stripe'} icon={<FaStripeS />} iconBg={'#092039'} date={'Wed, 16 Feb, 18:11'} type={'Business'} amount={'+$1223'} dec={'00'} textColor={'text-green-500'} decColor={'text-green-300'} />
            <TransactionTableItem name={'Dropbox'} icon={<FaDropbox />} iconBg={'#001047'} date={'Tue, 15 Feb, 14:24'} type={'Equipment'} amount={'-$200'} dec={'00'} textColor={'text-black'} decColor={'text-slate-400'} />
            <TransactionTableItem name={'Zendesk'} icon={<SiZendesk />} iconBg={'#033035'} date={'Wed, 16 Feb, 18:11'} type={'Marketing'} amount={'-$1223'} dec={'18'} textColor={'text-black'} decColor={'text-slate-400'} />
            <TransactionTableItem name={'Spotify'} icon={<SlSocialSpotify />} iconBg={'#000000'} date={'Mon 14 Feb, 16:40'} type={'Entertainment'} amount={'-$19'} dec={'00'} textColor={'text-black'} decColor={'text-slate-400'} />


          </div>

          <div className='w-[48%]'>
            <div className='flex justify-between items-center h-8'>
              <div className='flex items-center'>
                <FaStarOfLife size={20} />
                <p className='text-lg ms-2 poppins-semibold'>Cash Flow</p>
                <p className='text-slate-400 ms-2 text-sm'>Last 30 days</p>
              </div>
              <p className='text-indigo-500 ms-2 text-sm cursor-pointer poppins-medium'>See All</p>
            </div>
            <div className='w-full h-[2px] bg-gray-200 mt-4'></div>


            <ProgressTabs />


          </div>
        </div>















      </div>
    </div>
  );
}

export default App;
