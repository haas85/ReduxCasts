export const videoLoaded = (state = {}, action) => {
    return action.payload;
};

export const videoSelected = (state = {videoHistory: []}, action) => {
    state.selectedVideo = action.payload;
    state.videoHistory.push(action.payload);
    return state;
};
