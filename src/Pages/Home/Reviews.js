import React, { useEffect, useState } from 'react';
import people1 from '../../images/people1.png';
import people2 from '../../images/people2.png';
import people3 from '../../images/people3.png';
import Review from './Review';
import quote from '../../images/quote.svg';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review', {
            method: 'GET',
            // headers: {
            //     'content-type': 'application/json'
            // }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-28'>
            <div className='my-10'>
                <div>
                    <h4 className="text-5xl text-primary font-bold text-center">Reviews</h4>
                    <h2 className='text-3xl text-center'>What our Clients say</h2>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;