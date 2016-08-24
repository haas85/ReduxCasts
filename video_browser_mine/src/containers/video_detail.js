import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from '../components/comment_list';

class VideoDetail extends Component {

  constructor(props){
    super(props);
      window.cosa = this;
    this.comments= props.comments;
  }

  render() {
    if (!this.props.videoSelected.video) {
      return <div>Loading...</div>;
    }

    const videoId = this.props.videoSelected.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
          <div>{this.props.videoSelected.video.snippet.title}</div>
          <div>{this.props.videoSelected.video.snippet.description}</div>
        </div>
        <CommentList comments={this.comments}></CommentList>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    videoSelected: state.videoSelected
  }
}

export default connect(mapStateToProps, null)(VideoDetail);
