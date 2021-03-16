import React from 'react';
import { useParams } from 'react-router';
import GoBackButton from '../Buttons/GoBackButton';

const Album = () => {
    const { id } = useParams();

    return <div>
        <GoBackButton />
        Album {id}
    </div>
}

export default Album;
