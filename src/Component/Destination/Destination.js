import React from 'react';
import { useParams } from 'react-router';

const Destination = () => {
    const {id}=useParams()
    return (
        <div>
            <h2>This is Destination {id}</h2>
        </div>
    );
};

export default Destination;