import React from 'react';

const Protfolio = () => {
    return (
        <div>
            <h1 className='text-5xl m-5'>My protfolio</h1>
            <h1 className='text-4xl' ><span className='font-bold'>name:</span> Monira Jahan Tania</h1>
            <h1 className='text-2xl m-4' ><span className='font-bold'>email:</span> tania598330@gmail.com</h1>

            <h1 className='text-4xl mt-4'>Educational Background:</h1>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr className='text-red-500'>
                            <th>SSC</th>
                            <th>HSC</th>
                            <th>University</th>
                        </tr>

                        <tr>
                            <td>Badda Alatunnessa Higher Secondary School</td>
                            <td>BAF Shaheen College Dhaka</td>
                            <td>University of Dhaka
                                <p>Department of Geology</p>
                                <p>3rd year</p>
                            </td>
                        </tr>

                    </thead>
                </table>
            </div>
            <div>
                <h1 className='text-4xl mt-5 font-bold'>Technologies: </h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS(tailwind, bootstrap)</li>
                    <li>JS(react, mongoDB, node.js)</li>
                    <li>C++</li>
                    <li>C</li>
                </ul>
            </div>
            <div>
                <h1 className='text-5xl font-bold'>Links of my best projects:</h1>
                <ol>
                    <li className='text-green-500 mt-5'><a href="https://warehouse-management-b6820.web.app/">Warehouse Management</a></li>
                    <li className='text-green-500 mt-3'><a href="https://services-provider-1c929.web.app/">Service Provider</a></li>
                    <li className='text-green-500 mt-3'><a href="https://womens-world-makeup-store.netlify.app/">Make up store</a></li>
                    <li></li>
                    <li></li>
                </ol>
            </div>
        </div>
    );
};

export default Protfolio;