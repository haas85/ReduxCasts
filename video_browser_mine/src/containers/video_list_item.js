import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/videoManager';

const VideoListItem = ({video, selectVideo}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => selectVideo(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectVideo: selectVideo }, dispatch);
};

export default connect(null, mapDispatchToProps)(VideoListItem);
