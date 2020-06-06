import axios from 'axios';
import { FETCH_USER, FETCH_SONGS, FETCH_SONG, SEARCH_SONGS } from './types';

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({type: FETCH_USER, payload: res.data});
};

export const createSong = (values, history) => async dispatch => {
        const res = await axios.post('/api/songs', {data: JSON.stringify(values)});
        history.push('/songs');
        dispatch({ type: FETCH_USER, payload: res.data})
};

export const fetchSongs = () => async dispatch => {
        const res = await axios.get('/api/songs');
        dispatch({ type: FETCH_SONGS, payload: res.data})
};

export const fetchSong = (songID) => async dispatch => {
        const res = await axios.get(`/api/songs/song/${songID}`);
        dispatch({ type: FETCH_SONG, payload: res.data})
};

export const addLine = (values) =>  async dispatch => {
        const res = await axios.post('/api/line_chord_unit/add', values);
        dispatch({ type: FETCH_SONG, payload: res.data})
}

export const updateLine = (values) =>  async dispatch => {
        const res = await axios.post('/api/line_chord_unit/words', values);
        dispatch({ type: FETCH_SONG, payload: res.data})
}

export const insertChord = (values) =>  async dispatch => {
        const res = await axios.post('/api/line_chord_unit/dir', values);
        dispatch({ type: FETCH_SONG, payload: res.data});
}

export const changeDirection = (values) => async dispatch => {
        const res = await axios.post('/api/line_chord_unit/dir', values);
        dispatch({ type: FETCH_SONG, payload: res.data});        
}

export const emptyChords = (values) =>  async dispatch => {
        const res = await axios.post('/api/line_chord_unit/chord/empty', values);
        dispatch({ type: FETCH_SONG, payload: res.data});
}

export const updateChord = (values) =>  async dispatch => {
        const res = await axios.post('/api/line_chord_unit/chord/value', values);
        dispatch({ type: FETCH_SONG, payload: res.data});
}

export const searchSongs = (name) => async dispatch => {
        const res = await axios.post('/api/songs/search', {data: name});
        dispatch({ type: SEARCH_SONGS, payload: res.data})
};
