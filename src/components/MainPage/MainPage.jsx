import React, { useEffect } from 'react';
import { loadPhotos, unmountMainPage } from '../../ducks/mainPage';
import { useDispatch, useSelector } from "react-redux";
import LoadMoreButton from '../Buttons/LoadMoreButton';
import PhotoCard from '../PhotoCard/PhotoCard';

const MainPage = () => {
    const dispatch = useDispatch();

    const isLoaded = useSelector(state => state.mainPage.isLoaded);
    const photos = useSelector(state => state.mainPage.photos);

    useEffect(() => {
        dispatch(loadPhotos());
        return () => {
            dispatch(unmountMainPage());
        };
    }, []);

    return <div className="row row-cols-md-3">
        {photos.map(photo => {
            return <PhotoCard key={photo.id} photo={photo} />
        })}
        <LoadMoreButton isLoaded={isLoaded} clickHandler={() => { dispatch(loadPhotos()); }} />
    </div>
}

export default MainPage;
