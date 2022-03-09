import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 3k9k_QumOagl1QOrobB0uO1BZJFID_DbK2HFBdwvfPc'//key, do site unsplash
	}
})