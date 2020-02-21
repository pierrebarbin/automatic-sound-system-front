import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({text}) => {
    return (
        <div>
            {text ? (<span className="mr-2">{text}</span>) : ""}
            <span className="loader"><span></span></span>
        </div>
    );
};

Loading.propTypes = {
    
};

export default Loading;