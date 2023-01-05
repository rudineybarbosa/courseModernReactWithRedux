import axios from 'axios';

const KEY = 'AIzaSyAHjUF2YOoyPiLNF8qjaARhz4J-sl_jhwc'

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});