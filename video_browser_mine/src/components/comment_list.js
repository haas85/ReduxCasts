import React, {Component} from 'react';
import CommentListItem from './comment_list_item';

export default class CommentList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        let comments = this.props.comments.map((comment) => {
            return <CommentListItem key={comment.id} comment={comment}></CommentListItem>
        });

        return (
            <div className="comments col-md-12">
                <div className="commentTitle">Comments:</div>
                <ul className="col-md-12 list-group">
                    {comments}
                </ul>
            </div>
        );
    }
}