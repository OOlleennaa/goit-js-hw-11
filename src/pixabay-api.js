import axios from 'axios';

const URL = "https://pixabay.com/api/";
const KEY = "38368855-bf8c959061acd8b60d5e29ebb";

export async function fetchPhoto(q, page, perPage) {
    const url = `${URL}?key=${KEY}&q=${q}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&safesearch=true`;
    const response = await axios.get(url);
    return response.data;          
};