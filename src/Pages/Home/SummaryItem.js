import React from 'react';

const SummaryItem = ({ cardTitle, bgClass, number, img }) => {
    return (
        <div className={`card bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-5 pt-5'>
                <div class="avatar">
                    <div class="w-16 rounded-xl">
                        <img src={img} />
                    </div>
                </div>

            </figure>
            <div className="card-body text-white">
                <h2 className=" text-xl text-center">{cardTitle}</h2>
                <h2 className="text-2xl">{number}</h2>
            </div>
        </div>
    );
};

export default SummaryItem;