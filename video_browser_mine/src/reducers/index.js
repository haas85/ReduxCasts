import {FETCH_VIDEOS, SELECT_VIDEO} from '../actions/videoManager';
import {videoLoaded, videoSelected} from './videoReducer';

export default function (state = {}, action) => {
    switch (action.type) {
        case FETCH_VIDEOS:
            return videoLoaded(state, action);
        case SELECT_VIDEO:
            return videoSelected(state, action);
        default:
            return state;
    }
}
