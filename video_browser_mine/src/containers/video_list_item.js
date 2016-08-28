import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectVideo, fetchComments } from '../actions/videoManager';

class VideoListItem extends Component{
  constructor(props) {
    super(props);
    this.video = props.video;
    this.selectVideo = props.selectVideo;
    this.fetchComments = props.fetchComments;
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  onVideoSelect() {
    this.selectVideo(this.video);
    this.fetchComments(this.video.id.videoId);
  }

  render() {
    const imageUrl = this.video.snippet.thumbnails.default.url;

    return (
        <li onClick={this.onVideoSelect} className="list-group-item">
          <div className="video-list media">
            <div className="media-left">
              <img className="media-object" src={imageUrl} />
            </div>
            <div className="media-body">
              <div className="media-heading">{this.video.snippet.title}</div>
            </div>
          </div>
        </li>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    selectVideo: selectVideo,
    fetchComments: fetchComments
  }, dispatch);
};

export default connect(null, mapDispatchToProps)(VideoListItem);
