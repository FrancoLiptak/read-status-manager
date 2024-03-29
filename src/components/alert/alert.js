import React from 'react';

function Alert(props) {
    return (
        <div class="alert alert-primary" role="alert">
            {props.text}
        </div>
    );
}

export default Alert;