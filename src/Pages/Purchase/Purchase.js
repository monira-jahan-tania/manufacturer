import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebse.init';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const [part, setPart] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [part]);

    const handlePurchase = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const price = parseInt(part.price) * parseInt(quantity)
        const purchase = {
            purchaseId: part._id,
            purchase: part.name,
            price,
            quantity: quantity,
            user: user.email,
            userName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        }
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Your order is done: ${data.name}`)
                }
            })

    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="card lg:max-w-lg bg-base-100 shadow-2xl" >
                <div className="card-body text-center">
                    <div className='flex items-center justify-center'><img src={part.img} alt="" /></div>
                    <div className='item-description'>
                        <h4 className='text-xl font-bold'>{part.name}</h4>
                        <p className='m-0 text-sm'>{part.description}</p>
                        <h5 className='m-0 font-bold'>Available Quantity: {part.quantity}</h5>
                        <h5 className='m-0 font-bold'>Minimum Order Quantity: 100</h5>
                        <h4 className='m-0 font-bold'>Price: ${part.price}/per unit</h4>

                    </div>
                </div>

            </div >
            <div className='mt-5'>
                <h3 className="font-bold text-lg text-secondary">Order the Item: {part.name}</h3>
                <form className='grid grid-cols-1 gap-3 justify-items-center mt-2' onSubmit={handlePurchase}>
                    <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-lg" />
                    <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-lg" />
                    <input type="number" name="quantity" className="input input-bordered w-full max-w-lg" />
                    <input type="text" name="address" placeholder="Address" className="input input-bordered w-full max-w-lg" />
                    <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-lg" />
                    <input type="submit" value="Place Order" className="btn btn-secondary w-full max-w-lg" />
                </form>


            </div>
        </div>
    );
};

export default Purchase;