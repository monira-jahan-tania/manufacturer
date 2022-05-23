import React from 'react';

const Part = ({ part }) => {
    const { name, description, price, quantity, img } = part;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-2xl" >
            <div className="card-body text-center">
                <div className='flex items-center justify-center'><img src={img} alt="" /></div>
                <div className='item-description'>
                    <h4>{name}</h4>
                    <p className='m-0'>{description}</p>
                    <h5 className='m-0'>Quantity: {quantity}</h5>
                    <h4 className='m-0'>Price: ${price}</h4>
                </div>
            </div>

        </div >
    );
};

export default Part;