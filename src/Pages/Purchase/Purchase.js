import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [part, setPart] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [part]);
    return (
        <div>
            <h1>Your item is: {part.name}</h1>
        </div>
    );
};

export default Purchase;