import React from 'react';

const Feature = () => {
    return (
        <div className='mx-auto'>
            <h1 className='text-4xl font-bold m-5'>Features</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3  '>
                <div className='text-2xl bg-green-300 text-white w-[200px] h-[150px] flex justify-center items-center'>
                    High Time Warrenty
                </div>
                <div className='text-2xl bg-blue-300 text-white w-[200px] h -[1500px] flex justify-center items-center'>
                    Faithful
                </div>
                <div className='text-2xl bg-red-300 text-white w-[200px] h -[150px] flex justify-center items-center'>
                    Budget Friendly
                </div>
            </div>
        </div>
    );
};

export default Feature;