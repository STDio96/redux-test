import React from 'react';

const LoadMoreButton = ({ isLoaded, clickHandler }) => {
    return <button className="btn btn-success" disabled={!isLoaded} onClick={clickHandler}>
        {!isLoaded ?
            <span className="spinner-border spinner-border-sm"></span> :
            'Load more...'
        }
    </button>
}

export default LoadMoreButton;