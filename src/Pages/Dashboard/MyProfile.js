import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebse.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [upDateUser, setUpdateUser] = useState({})
    const handleProfile = event => {
        event.preventDefault();

        const user = {
            education: event.target.education.value,
            phone: event.target.phone.value,
            location: event.target.location.value,
            linkedin: event.target.linkedin.value
        }
        fetch(`http://localhost:5000/user/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // if (data.success) {
                //     toast.success(`Your order is done: ${data.purchase}`);
                //     data = null;
                // }
                console.log(data);
            })

    }


    return (
        <div className='mt-5'>
            <h1 className='text-2xl font-bold'>Name: {user.displayName}</h1>
            <h1 className='text-xl'>Email: {user.email}</h1>

            <form className='grid grid-cols-1 gap-3 justify-items-center mt-2' onSubmit={handleProfile}>

                <input type="text" name="education" placeholder="education" className="input input-bordered w-full max-w-lg" />
                <input type="text" name="location" placeholder="location" className="input input-bordered w-full max-w-lg" />

                <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-lg" />
                <input type="text" name="linkedin" placeholder="Your linkedin Link" className="input input-bordered w-full max-w-lg" />
                <input type="submit" value="Place Order" className="btn btn-secondary w-full max-w-lg" />
            </form>


        </div >
    );
};

export default MyProfile;