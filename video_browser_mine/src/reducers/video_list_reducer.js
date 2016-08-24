import { FETCH_VIDEOS } from '../actions/videoManager';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_VIDEOS:
            return action.payload.data.items || [];
        default:
            return state;
    }
}
