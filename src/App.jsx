import {useState, useEffect} from 'react'

import srcImgBg from './assets/images/bg.png'
import srcImgHeart1 from './assets/images/Picture9.png'
import srcHeart1 from './assets/images/Picture1.png'
import srcLoveText from './assets/images/Picture2.png'
import srcHeartOverlay2 from './assets/images/Picture5.png'
import srcHeartOverlay3 from './assets/images/Picture6.png'
import srcHeart2 from './assets/images/Picture3.png'
import srcHeart3 from './assets/images/Picture4.png'

import CONFIG from "./configs.js";

function App() {


    useEffect(() => {
        document.title = CONFIG.docsTitle;
    }, []);


    const startDate = new Date(CONFIG.startDate);
    const currentDate = new Date();
    const dayCounter = ((currentDate - startDate) / (1000 * 60 * 60 * 24)).toFixed(0);

    const currentDay = String(currentDate.getDate()).padStart(2, '0')
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const currentYear = String(currentDate.getFullYear()).slice(-2);

    const startDay = String(startDate.getDate()).padStart(2, '0')
    const startMonth = String(startDate.getMonth() + 1).padStart(2, '0');
    const startYear = String(startDate.getFullYear()).slice(-2);

    // console.log(startYear)

    return (
        <div className='overflow-clip'>
            <div className="w-screen h-screen relative" style={
                {
                    backgroundImage: `url(${srcImgBg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }
            }>
                <div
                    className="header h-[60px] md:h-[100px] w-full border-b-2 border-hd-gray border-solid flex items-center justify-center">
                    <h2 className="font-lateef text-xl md:text-3xl tracking-[8px] md:tracking-[25px] text-center">{`${CONFIG.headerTitle}`}</h2>
                </div>
                <div className="container max-w-[700px] mx-auto flex flex-col justify-center">
                    <div className="mt-6">
                        <h2 className="hidden md:block font-kodchasan text-xl md:text-2xl text-hd-dark font-normal text-center"><span
                            className="text-hd-red font-bold heart-effect-text">{`${CONFIG.loverName}`}</span>, I have fallen in love with
                            you for:</h2>
                        <h2 className="block md:hidden font-kodchasan text-xl md:text-2xl text-hd-dark font-normal text-center"><span
                            className="text-hd-red font-bold">{`${CONFIG.loverName}`}</span>, I have fallen in love <br/> with
                            you for:</h2>
                    </div>
                    <div className="relative">
                        <img className="absolute w-[700px] z-0" src={srcImgHeart1} alt=""/>
                        <img className="absolute w-[700px] z-0 animate-ping" src={srcImgHeart1} alt=""/>
                        <div className="grid grid-cols-3 z-20 mt-[-20px] md:mt-6 px-6 mb-[-40px]">
                            <div className="flex flex-col items-center justify-center z-20">
                                <p className="font-crushed text-3xl text-hd-gray">from</p>
                                <p className="font-serif font-normal text-hd-red text-4xl text-center mt-1">{`${startDay}`}
                                    <br/>{`${startMonth}`} <br/>{`${startYear}`}
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center z-20 translate-y-[20px]">
                                <p className="font-serif font-normal text-hd-red text-[120px] text-center relative">{dayCounter}</p>
                                <p className="font-script font-normal text-hd-dark text-[54px] text-center relative translate-y-[-80px]">days</p>
                            </div>
                            <div className="flex flex-col items-center justify-center z-20">
                                <p className="font-crushed text-3xl text-hd-gray">to</p>
                                <p className="font-serif font-normal text-hd-red text-4xl text-center mt-1">{`${currentDay}`}
                                    <br/>{`${currentMonth}`} <br/>{`${currentYear}`}
                                </p>
                            </div>
                        </div>
                        <div className="z-20 flex justify-center">
                            <img className='z-20 animate-[wiggle_6s_ease-in-out_infinite] w-[250px] md:w-[350px]' src={srcHeart1} alt=""/>
                        </div>
                        <div className="z-20 flex justify-center items-center mt-0 relative">
                            <img className='absolute w-[300px] md:w-[400px]' src={srcLoveText} alt=""/>
                            <p className="block md:hidden font-kodchasan text-[22px] md:text-[48px] text-hd-dark text-center">Love
                                you <br/> forever and ever.</p>
                            <p className="hidden md:block font-kodchasan text-[22px] md:text-[48px] text-hd-dark text-center">Love
                                you forever and ever.</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={srcHeartOverlay2} alt="" className="absolute w-[150px] md:w-[400px] bottom-[18vh] left-0"/>
            <img src={srcHeartOverlay3} alt="" className="absolute w-[150px] md:w-[400px] bottom-[18vh] right-0"/>
            <img src={srcHeart2} alt="" className="absolute animate-[wiggle_3s_ease-in-out_infinite] w-[60px] md:w-[150px] top-[20vh] left-[-10px]"/>
            <img src={srcHeart3} alt="" className="absolute animate-[wiggle_2.5s_ease-in-out_infinite] w-[60px] md:w-[150px] top-[16vh] right-[5px] md:right-[25px]"/>

        </div>
    )
}

export default App
