import React from 'react';
import { useParams } from 'react-router';
import GoBackButton from '../Buttons/GoBackButton';

const SinglePhoto = () => {
    const { id } = useParams();

    return <div>
        <GoBackButton />
        Signle Photo page {id}
    </div>
}

export default SinglePhoto;