import React from 'react';
import ReactDOM from 'react-dom';


function getButtonText () {
	return "Button name by JS Function"
}
const App = () => {

	const buttonText = "Button name by JS Variable"
	const buttonByObject = {text:"Button name by JS Object"}

	return (
		<div style={{backgroundColor:'red', color:'white'}}>
			<label className='label' htmlFor="name">
				Enter Name: 
			</label>
			<input id="name" type="text"></input>
			
			<button style={{backgroundColor:'blue', color:'white'}}>
				{buttonText}
			</button>

			<button style={{backgroundColor:'blue', color:'white'}}>
				{getButtonText()}
			</button>

			<button style={{backgroundColor:'blue', color:'white'}}>
				{buttonByObject.text}
			</button>
			

		</div>
		);
}

ReactDOM.render(<App />, 
	document.querySelector("#root"));
