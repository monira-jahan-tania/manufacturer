import React from 'react';

const Part = ({ part }) => {
    const { name, description, price, quantity, img } = part;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-2xl" >
            <div className="card-body text-center">
                <div className='flex items-center justify-center'><img src={img} alt="" /></div>
                <div className='item-description'>
                    <h4 className='text-xl font-bold'>{name}</h4>
                    <p className='m-0 text-sm'>{description}</p>
                    <h5 className='m-0 font-bold'>Available Quantity: {quantity}</h5>
                    <h5 className='m-0 font-bold'>Minimum Order Quantity: 100</h5>
                    <h4 className='m-0 font-bold'>Price: ${price}/per unit</h4>
                    <button className='btn btn-primary mt-2'>Buy Now</button>
                </div>
            </div>

        </div >
    );
};

export default Part;