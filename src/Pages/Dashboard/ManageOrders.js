import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageOrders = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allPurchase', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    let shipped = 0;
    const handleShipped = (id) => {
        shipped = 1;

    }
    return (

        <div>
            <h1>Orders: {parts.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Tool</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parts.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.purchase}</td>
                                <td>{a.quantity}</td>
                                <td>{a.price}</td>
                                <td>
                                    {(a.price && !a.paid) && <button className='btn btn-xs btn-success'>unpaid</button>}
                                    {(a.price && a.paid) && <button className='btn btn-xs' onClick={handleShipped}>{shipped === 1 ? 'shipped' : 'pending'}</button>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageOrders;