import React, { useEffect } from 'react';
import { loadPhotos, unmountMainPage } from '../../ducks/mainPage';
import { useDispatch, useSelector } from "react-redux";
import LoadMoreButton from '../Buttons/LoadMoreButton';
import PhotoCard from '../PhotoCard/PhotoCard';

const MainPage = () => {
    const dispatch = useDispatch();

    const isLoaded = useSelector(state => state.isLoaded);
    const photos = useSelector(state => state.photos)

    useEffect(() => {
        dispatch(loadPhotos());
        return () => {
            dispatch(unmountMainPage());
        };
    }, []);

    /* const showPhotos = () => {
        dispatch(loadPhotos());
    } */

    return <div className="row row-cols-md-3">
        {photos.map(photo => {
            /* return <div className="col" key={photo.id}>
                <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" src={photo.thumbnailUrl} />

                    <div className="card-body">
                        <p className="card-text">{photo.title}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <a className="btn btn-sm btn-outline-secondary" href={`/album/${photo.albumId}`}>Open album</a>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div> */
            return <PhotoCard key={photo.id} photo={photo} />
        })}
        <LoadMoreButton isLoaded={isLoaded} clickHandler={() => { dispatch(loadPhotos()); }} />
        {/* <button className="btn btn-success" disabled={!isLoaded} onClick={showPhotos}>
            {!isLoaded ?
                <span className="spinner-border spinner-border-sm"></span> :
                'Load more...'
            }
        </button> */}
    </div>
}

export default MainPage;
