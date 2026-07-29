import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({text}) => {
    return <div>{text}</div>
}

Comment.propTypes = {
    text: PropTypes.string.isRequired
}

export default Comment;