import { combineReducers } from 'redux';
import VideoListReducer from './video_list_reducer';
import SelectedVideoReducer from './selected_video_reducer';
import CommentListReducer from './video_comment_reducer';

const rootReducer = combineReducers({
    videoList: VideoListReducer,
    videoSelected: SelectedVideoReducer,
    commentList: CommentListReducer
});

export default rootReducer;