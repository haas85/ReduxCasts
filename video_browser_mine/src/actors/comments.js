import { fetchComments } from '../actions/videoManager';

export default function (state, dispatch) {
    if (state.videoSelected.video && !state.videoSelected.comments) {
        dispatch(fetchComments(state.videoSelected.video.id.videoId));
    }
}
