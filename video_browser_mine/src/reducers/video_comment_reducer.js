import { FETCH_COMMENTS } from '../actions/videoManager';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return action.payload.data.items || [];
        default:
            return state;
    }
}
