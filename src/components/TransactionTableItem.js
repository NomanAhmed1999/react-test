import React from "react";

const TransactionTableItem = ({icon, name, date, type, amount, dec, textColor, decColor, iconBg}) => {


    return (
        <div>
            <div className='flex justify-between mt-1 px-4 py-2 items-center transition-all duration-300 cursor-pointer hover:bg-slate-100 hover:scale-[.98]'>
                <div className='flex items-center'>
                    <div style={{backgroundColor: iconBg}} className='w-10 h-10 flex justify-center items-center'>
                        <p className='text-white text-3xl'>{icon}</p>
                    </div>
                    <div className='ms-4'>
                        <p className='poppins-medium'>{name}</p>
                        <p className='text-slate-400 text-sm'>{date}</p>
                    </div>
                </div>
                <div className='bg-slate-200 p-1'>
                    <p className='poppins-medium'>{type}</p>
                </div>
                <div>
                    <p className={textColor}>{amount}<span className={decColor}>.{dec}</span></p>
                </div>
            </div>
                <div className='w-full h-[1px] bg-gray-200 mt-2'></div>
        </div>
    )
}

export default TransactionTableItem;