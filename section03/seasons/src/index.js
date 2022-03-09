import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.initState()
	}

	componentDidMount(){
		console.log("didMount App")
		this.getLatitude()
	}
	
	componentDidUpdate(){
		console.log("didUpdate App")

	}

	getLatitude(){

		//Versão do curso
		/*window.navigator.geolocation.getCurrentPosition(
			position => {
				console.log(position.coords);
				this.setState({lat: position.coords.latitude});
			}, errorCallBack); 
		*/

		//Refactor
		window.navigator.geolocation.getCurrentPosition(
			(position) => successCallBack(position),
			err => errorCallBack(err)
		);

		const successCallBack = (position) => {
			var crd = position.coords;

			/**UPDATING A STATE PROPERTY */
			this.setState({lat: crd.latitude});

			// console.log(crd);
		  };
		  
		const errorCallBack = (err) => {
			this.setState({errorMessage: err.message})
		  };
	}

	initState(){
		this.state = { lat: null, errorMessage:''};
	}


	helperRenderContent(){
		if(this.state.lat && !this.state.errorMessage){
			return <SeasonDisplay lat={this.state.lat}/>
		}

		if(!this.state.lat && this.state.errorMessage){
			return <div>Error: {this.state.errorMessage}</div>
		}

		return <Spinner message='Please, accept location request'/>
	}

	//React says we have to define render method
	render (){
		return (
			<div className='border red'>{this.helperRenderContent()}</div>
		)
	}	
}

ReactDOM.render(<App></App>, document.querySelector("#root"))