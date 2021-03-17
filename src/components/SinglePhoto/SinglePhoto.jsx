import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPhoto, unmountPhotoPage } from '../../ducks/singlePhotoPage';
import { Link, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const SinglePhoto = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const isLoaded = useSelector(state => state.photoPage.isLoaded);
    const photoInfo = useSelector(state => state.photoPage.photoInfo);

    useEffect(() => {
        dispatch(loadPhoto(id));
        return () => {
            dispatch(unmountPhotoPage());
        };
    }, []);

    return <div>
        {!isLoaded
            ? <Loader />
            : <div className="row">
                <div className="col-6">
                    <figure className="figure">
                        <img src={photoInfo.url} className="figure-img img-fluid rounded" alt={photoInfo.title} />
                        <figcaption className="figure-caption">{photoInfo.title}</figcaption>
                    </figure>
                </div>
                <div className="col-6">
                    This image is from the following album:&nbsp;
                    <Link to={`/album/${photoInfo.album.id}`}>
                        <b>{photoInfo.album.title}</b>
                    </Link>
                </div>
            </div>
        }
    </div>
}

export default SinglePhoto;