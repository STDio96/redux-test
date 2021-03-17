import React from 'react';

const AlbumInfoBlock = ({ albumInfo }) => {
    // if albumInfo doesn't have any keys for some reason
    if (albumInfo && Object.keys(albumInfo).length !== 0) {
        return <div className="row">
            <div className="col-4 col-offset-2">
                <div className="card">
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
            </div>
        </div>
    } else {
        return <div className="alert alert-danger">
            Album info not found
      </div>
    }
}

export default AlbumInfoBlock;
