import React from 'react';

const CommentListItem = (props) => {
    let comment = props.comment.snippet.topLevelComment.snippet;

    return (
        <li className="list-group-item">
            <div className="comment-list author">{comment.authorDisplayName}</div>
            <p className="comment-list text">{comment.textDisplay}</p>
        </li>
    );
};

export default CommentListItem;