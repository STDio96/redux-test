import React from 'react';
import { useParams } from 'react-router';

const SinglePhoto = () => {
    const { id } = useParams();

    return <div>
        Signle Photo page {id}
    </div>
}

export default SinglePhoto;