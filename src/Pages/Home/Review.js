import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-2xl">
            <div className="card-body">
                <p>{review.description}</p>
                <div className="flex items-center justify-center flex-col">
                    <h4 className='text-xl'>Name: {review.name}</h4>
                    <p>rating: {review.rating}</p>
                </div>
            </div>
        </div>

    );
};

export default Review;