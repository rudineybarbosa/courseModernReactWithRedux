import React from 'react';

class ImageCard extends React.Component{
	constructor(props){
		super(props)

		this.state = {spans: 0}

		this.imageReference = React.createRef();
	}

	componentDidMount(){
		this.imageReference.current.addEventListener('load', this.setSpans);
		
	}

	setSpans = () => {
		const height = this.imageReference.current.clientHeight;
		const cssGridAutoRowsPixels = 10;
		
		const spans = Math.ceil(height / cssGridAutoRowsPixels)

		this.setState({spans})

	}

	render(){
		const {description, urls} = this.props.image;

		return(
			<div style={{ gridRowEnd: `span ${this.state.spans}`}}>
				<img ref={this.imageReference}
					alt={description} 
					src={urls.regular}
				/>
			</div>
		)
	}
}

export default ImageCard;