var axios = require('axios');

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEOS';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';


const API_KEY = 'AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss';

export const fetchVideos = (text) => {
    const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

    let params = {
        part: 'snippet',
        key: API_KEY,
        q: text,
        type: 'video'
    };

    let request = axios.get(ROOT_URL, { params: params });

    return {
        type: FETCH_VIDEOS,
        payload: request
    }
};

export const selectVideo = (video) => {
    return {
        type: SELECT_VIDEO,
        payload: video
    }
};

export const fetchComments = (video_id) => {
    const ROOT_URL = 'https://www.googleapis.com/youtube/v3/commentThreads';

    let params = {
        part: 'snippet',
        key: API_KEY,
        videoId: video_id
    };

    let request = axios.get(ROOT_URL, { params: params });

    return {
        type: FETCH_COMMENTS,
        payload: request
    }
};