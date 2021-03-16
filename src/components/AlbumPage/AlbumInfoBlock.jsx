import React from 'react';

const AlbumInfoBlock = ({ albumInfo }) => {
    // if albumInfo doesn't have any keys for some reason
    if (Object.keys(albumInfo).length !== 0) {
        return <div className="card">
            <div className="card-header">
                {albumInfo.user.name}'s album
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{albumInfo.title}</p>
                    <footer className="blockquote-footer">{albumInfo.user.email}</footer>
                </blockquote>
            </div>
        </div>
    } else {
        return <div>no info yet</div>
    }
}

export default AlbumInfoBlock;
