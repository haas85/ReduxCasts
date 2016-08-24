import { SELECT_VIDEO } from '../actions/videoManager';

export default function (state = {videoHistory: []}, action) {
    switch (action.type) {
        case SELECT_VIDEO:
            return Object.assign({}, {
                video: action.payload,
                videoHistory: [...state.videoHistory, action.payload]
            });
        default:
            return state;
    }
}
