import React from 'react';

const Error = ({ history }) => {
    return (
        <div style={{textAlign: "center"}}>
            <button onClick={() => history.push('/')}>GO TO MAIN PAGE</button>
            ERROR
        </div>
    );
};

export default Error;