import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const PhotoCard = ({ photo }) => {
    const currentPage = useLocation();

    return <div className="col">
        <div className="card shadow-sm">
            <Link to={`/photo/${photo.id}`}>
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" alt={photo.title} src={photo.thumbnailUrl} />
            </Link>

            <div className="card-body">
                <p className="card-text">{photo.title}</p>
                <div className="d-flex justify-content-between align-items-center">
                    {/* трошки логіки, щоб приховати посилання на альбом, якщо ми вже в альбомі :) */}
                    {!currentPage.pathname.includes('/album/') &&
                        <Link to={`/album/${photo.albumId}`} className="btn btn-sm btn-outline-secondary">
                            Open album
                    </Link>}
                    <small className="text-muted">Album [{photo.albumId}]</small>
                </div>
            </div>
        </div>
    </div>
}

PhotoCard.propTypes = {
    photo: PropTypes.object.isRequired
}

export default PhotoCard;
