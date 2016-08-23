import { SELECT_VIDEO } from '../actions/videoManager';

export default function (state = {videoHistory: []}, action) {
    switch (action.type) {
        case SELECT_VIDEO:
            state.selectedVideo = action.payload;
            state.videoHistory.push(action.payload);
            return state;
        default:
            return state;
    }
}
