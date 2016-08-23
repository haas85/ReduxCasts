import React from 'react';
import { connect } from 'react-redux';
import VideoListItem from '../components/video_list_item';

const VideoList = (props) => {
  console.log(props);
  const videoItems = props.videoList.map((video) => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    videoList: state.videoList
  };
}

export default connect(mapStateToProps, null)(VideoList);
