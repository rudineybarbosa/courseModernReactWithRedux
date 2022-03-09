import React from 'react'


class SearchBar extends React.Component {
	state = {term: ''};

	onInputClick = (event) => {
		console.log('onInputClick')
	}

	onFormSubmit(event){
		event.preventDefault()
		this.props.AppJsOnFormSubmit(this.state.term)
	}

	render(){
		return (
			<div className='ui segment'>
				<form className='ui form' onSubmit={(e) => this.onFormSubmit(e)}>
					<div className='field'>
						<label>Image Search</label>
						<input type='text' 
							value={this.state.term}
							onChange={event => 
								this.setState({term: event.target.value.toLowerCase()})}
							onClick={this.onInputClick}
							></input>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;