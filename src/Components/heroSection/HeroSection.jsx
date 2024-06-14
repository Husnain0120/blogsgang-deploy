import React, { useContext } from 'react';
import { Typography } from '@material-tailwind/react';
import myContext from '../../context/data/MyContext';
import './background.css';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#082f49' }}
            className="relative">
            <div className="hero-background absolute inset-0"></div> {/* Background Container */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col relative z-10">
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            <div className="flex justify-center">
                                <img width={120} src="https://cdn-icons-png.freepik.com/256/12104/12104790.png?uid=R98459826&ga=GA1.1.1114926933.1708955695&semt=ais_hybrid" alt="" className="hero-logo" />
                            </div>
                            <h1 className='text-3xl text-white font-bold hero-text'>BlogGang</h1>
                        </div>
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'white' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto hero-text">
                            Here are some blogs and tutorials contributed by BlogGang.
                        </p>
                        <span className='text-lime-700 opacity-45 hero-text'>{'copyright @2024'}</span>
                    </div>
                </main>
            </div>
        </section>
    );
}

export default HeroSection;
