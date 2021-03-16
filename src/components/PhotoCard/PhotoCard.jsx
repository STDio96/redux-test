import React from 'react';
import { Link } from 'react-router-dom'


const PhotoCard = ({ photo }) => {
    return <div className="col">
        <div className="card shadow-sm">
            <Link to={`/photo/${photo.id}`}>
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" alt={photo.title} src={photo.thumbnailUrl} />
            </Link>

            <div className="card-body">
                <p className="card-text">{photo.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={`/album/${photo.albumId}`} className="btn btn-sm btn-outline-secondary">
                        {/* <a className="btn btn-sm btn-outline-secondary" href={`/album/${photo.albumId}`}>Open album</a> */}
                        Open album
                    </Link>
                    <small className="text-muted">Album [{photo.albumId}]</small>
                </div>
            </div>
        </div>
    </div>
}

export default PhotoCard;
