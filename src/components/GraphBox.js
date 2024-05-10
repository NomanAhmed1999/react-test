import React, { useState, useEffect } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowRightDownFill, RiArrowRightUpFill } from "react-icons/ri";
import AreaChart from "./AreaChart";


const GraphBox = ({ name, perc, amount, iconInit, iconProcess, iconFinished }) => {

    const [expandCard, setExpandCard] = useState(false);
    const [expandGraph, setExpandGraph] = useState(false);
    const [cardBImg, setCardBImg] = useState(iconInit);

    useEffect(() => {
        if (!expandCard) {
            setCardBImg(iconInit);
        } else {
            setCardBImg(iconFinished);

        }
    }, [expandCard])



    return (
        <div className={expandCard ? "expand-graph-card flex cursor-pointer bg-white p-8 shadow-md shadow-gray-50 transition-all duration-700 relative" : "collaps-graph-card flex cursor-pointer bg-white p-8 shadow-md shadow-gray-50 transition-all duration-700 relative"}>
            <div className="graph-card-inner-w">
                <div className="w-[60px] h-[70px] sxxl:w-[100px] sxxl:h-[120px]">
                    <img src={cardBImg} className="transition-all duration-1000 sxxl:w-full" alt="image" width={60} height={60} />
                </div>
                <div className="flex items-center mt-4">
                    <p className="sxxl:text-2xl">{name}</p>
                    <div className={perc > 0 ? 'graph-arrow bg-lime-500 rounded-full py-[2px] px-[4px] ms-3 mt-1 sxxl:ms-6 sxxl:px-3' : 'graph-arrow bg-red-600 rounded-full py-[2px] px-[4px] ms-3 mt-1 sxxl:ms-6 sxxl:px-3'}>

                        {
                            perc > 0 ? <RiArrowRightUpFill className="text-[12px] sxxl:text-2xl" /> : <RiArrowRightDownFill className="text-[12px] sxxl:text-2xl" color='white' />
                        }
                    </div>
                    <p className="graph-arrow ms-1 text-sm sxxl:text-lg sxxl:ms-3">{perc}%</p>
                    <p className="text-slate-400 ms-4 text-xs hidden hide-line sxxl:text-lg">VS. LAST WEEK</p>
                </div>
                <div onMouseEnter={() => setCardBImg(iconProcess)} onMouseLeave={() => { !expandCard && setCardBImg(iconInit) }} className="graph-card graph-leave">
                    <p className="card-amount text-5xl transition-all duration-200 mt-4 sxxl:text-7xl">{amount}</p>

                    <div className="detail-btn hidden mt-12 items-center transition-all duration-200 sxxl:mt-8">
                        <button className="border-2 mb-4 border-slate-400 h-12 px-12 hover:bg-stone-300 sxxl:text-3xl sxxl:h-14">View Account Details</button>
                        <button onClick={() => {
                            setExpandCard(!expandCard); setCardBImg(iconFinished); setTimeout(() => {
                                setExpandGraph(!expandGraph)
                            }, 0)
                        }} className="bg-indigo-600 rounded-full h-12 w-12 ms-8 mb-4 flex justify-center items-center sxxl:w-16 sxxl:h-16">
                            <AiOutlineThunderbolt className="text-[20px] sxxl:text-2xl" color="white" />
                        </button>
                    </div>
                    <div className={expandGraph ? "b-line b-line-active w-[0] h-[4px] transition-all duration-1000 delay-300 bg-gray-400 absolute bottom-0 sxxl:h-1" : "b-line w-[0] h-[2px] transition-all duration-1000 delay-300 bg-gray-400 absolute bottom-0 sxxl:h-1"}></div>
                </div>
            </div>
            {
                expandGraph && (
                    <div className="flex justify-between w-full">
                        <div className="chart">
                            <AreaChart />
                        </div>
                        <button onClick={() => {
                            setExpandCard(false); setTimeout(() => {
                                setExpandGraph(false)
                            }, 100);
                        }} className="w-8 h-full bg-slate-200 absolute -right-0 flex justify-center items-center hover:bg-slate-300">
                            <IoIosArrowBack />
                        </button>

                    </div>

                )
            }

        </div>
    )
}

export default GraphBox;