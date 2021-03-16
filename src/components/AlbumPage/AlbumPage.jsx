import React, { useEffect } from 'react';
import { loadPhotos, loadAlbumInfo, unmountAlbumPage } from '../../ducks/albumPage';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import LoadMoreButton from '../Buttons/LoadMoreButton';
import Loader from '../Loader/Loader';
import PhotoCard from '../PhotoCard/PhotoCard';
import AlbumInfoBlock from './AlbumInfoBlock';

const AlbumPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const isLoaded = useSelector(state => state.albumPage.isLoaded);
    const isAlbumInfoLoaded = useSelector(state => state.albumPage.isAlbumInfoLoaded);
    const albumInfo = useSelector(state => state.albumPage.albumInfo);
    const photos = useSelector(state => state.albumPage.photos);

    useEffect(() => {
        dispatch(loadAlbumInfo(id));
        dispatch(loadPhotos(id));
        return () => {
            dispatch(unmountAlbumPage());
        };
    }, []);

    return <div>
        {isAlbumInfoLoaded
            ? <AlbumInfoBlock albumInfo={albumInfo} />
            : <Loader />
        }
        <div className="row row-cols-md-3">
            {photos.map(photo => {
                return <PhotoCard key={photo.id} photo={photo} />
            })}
            <LoadMoreButton isLoaded={isLoaded} clickHandler={() => { dispatch(loadPhotos(id)); }} />
        </div>
    </div>
}

export default AlbumPage;
