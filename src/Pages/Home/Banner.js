import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className=" w-[300px] lg:w-[700px] 
                rounded-lg" />
                <div>
                    <h1 className="text-5xl font-bold uppercase">Anyasha Tech</h1>
                    <p className="py-6">This is one of the best menufacturer company in bangladesh. It provides high durable Computer engineering tools with a budget friendly cost</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;