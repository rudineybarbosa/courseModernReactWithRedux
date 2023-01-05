import React from "react";
import youtube from '../api/youtube';

import SearchBar from "./SearchBar";
import VideloList from './VideoList';
import VideoDetail from "./VideoDetail";

class App extends React.Component{

	state = {
		videos: [], 
		selectedVideo: null
	};

	componentDidMount(){
		this.onSearchFormSubmit('buildings');
	}

	onSearchFormSubmit = async term => {

		const response = await youtube.get('/search', {
			params:{
				q: term
			}
		})

		// console.log(response)

		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		});
	}

	onVideoSelect = (video) => {
		//console.log("From de App", video);
		this.setState({selectedVideo: video})
	}

	render(){
		return (
			<div className="ui container">
					<SearchBar onSearchFormSubmit={this.onSearchFormSubmit}/>
					<div className="ui grid">
						<div className="ui row">
							<div className="eleven wide column">
								<VideoDetail video={this.state.selectedVideo}/>
							</div>
							<div className="five wide column">
								<VideloList videos={this.state.videos} 
										onVideoSelect={this.onVideoSelect}/>
							</div>
						</div>
					</div>
			</div>
		);
	}
}

export default App;