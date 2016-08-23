import { combineReducers } from 'redux';
import VideoListReducer from './video_list_reducer';
import SelectedVideoReeducer from './selected_video_reducer';

const rootReducer = combineReducers({
    videoList: VideoListReducer,
    videoSelected: SelectedVideoReeducer
});

export default rootReducer;