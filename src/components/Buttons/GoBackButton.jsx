import React from 'react';
import { useHistory } from 'react-router';

const GoBackButton = () => {
    const history = useHistory();

    return <button className="btn btn-info" onClick={() => { history.goBack() }}>Back</button>
}

export default GoBackButton;
