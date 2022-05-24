import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { partId } = useParams();
    return (
        <div>
            <h1>Your item is: </h1>
        </div>
    );
};

export default Purchase;