import { SELECT_VIDEO, FETCH_VIDEOS } from '../actions/videoManager';

export default function (state = {videoHistory: []}, action) {
    switch (action.type) {
        case SELECT_VIDEO:
            return Object.assign({}, {
                video: action.payload,
                videoHistory: [...state.videoHistory, action.payload]
            });
        case FETCH_VIDEOS:
            if (!state.video && action.payload.data.items.length > 0) {
                return Object.assign({}, {
                    video: action.payload.data.items[0],
                    videoHistory: [...state.videoHistory, action.payload.data.items[0]]
                });
            }
            return state;
        default:
            return state;
    }
}
