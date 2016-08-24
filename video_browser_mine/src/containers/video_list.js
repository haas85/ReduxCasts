import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoListItem from '../containers/video_list_item';
import { selectVideo } from '../actions/videoManager';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const videoItems = this.props.videoList.map((video) => {
      return (
          <VideoListItem
              key={video.etag}
              video={video} />
      );
    });

    return (
        <ul className="col-md-4 list-group">
          {videoItems}
        </ul>
    );
  }
};

function mapStateToProps(state) {
  return {
    videoList: state.videoList,
    videoSelected: state.videoSelected
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectVideo: selectVideo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
