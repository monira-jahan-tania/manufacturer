import React from 'react';
import { toast } from 'react-toastify';



const AddReviews = () => {
    const handleReview = (event) => {
        event.preventDefault();
        const review = {
            name: event.target.name.value,
            description: event.target.description.value,
            rating: event.target.rating.vlaue
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Your review is added`);
                    event.target.name.value = ' ';
                    event.target.description.value = ' ';
                    event.target.rating.vlaue = ' ';
                }
            })
    }
    return (
        <div className='flex justify-center items-center'>
            <form class="form-control w-full max-w-xs " onSubmit={handleReview}>
                <label class="label">
                    <span class="label-text">What is your name?</span>
                </label>
                <input name='name' type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                <label class="label">
                    <span class="label-text">Your Review:</span>
                </label>
                <textarea name='description' class="textarea textarea-bordered" placeholder="Type Your Review"></textarea>
                <label class="label">
                    <span class="label-text">Your Rating:</span>
                </label>
                <input type="number" class="input input-bordered w-full max-w-xs" name='rating' placeholder='GIve your rating out of 5' />
                <input type="submit" value="Submit Your Review" className="btn btn-secondary w-full max-w-lg mt-3" />
            </form>
        </div>
    );
};

export default AddReviews;