import React from 'react'
import unsplach from '../api/unsplach';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
	state = {images: []}

	//Note: 'async' na função e await na chamada do 'get'
	async onFormSubmitAppJs(term){
		const response = await unsplach.get('search/photos', {
			params:{query: term},
		})

		this.setState({images: response.data.results})
	}

	render(){
		return (
			<div className='ui container' style={{marginTop: '10px'}}>
				<SearchBar AppJsOnFormSubmit={term => this.onFormSubmitAppJs(term)}/>
				
				<ImageList images={this.state.images}/>

			</div>
		)
	}
}

export default App;