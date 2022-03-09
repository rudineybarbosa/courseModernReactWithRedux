import './SeasonDisplay.css'
import React from 'react'


const seasonConfig = {
	summer: {
		text: "Let's hit the beath",
		iconName: 'sun'
	},
	winter: {
		text: "Burr, it is chilly",
		iconName: 'snowflake'}
}

const getSeason = (lat, month) => {
	if(month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		
		return lat > 0 ? 'winter' : 'summer';
	}
}


/*
 Component SeasonDisplay definido como Função
*/
/* const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth);
	// const text = season == 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'
	// const icon = season == 'winter' ? 'snowflake' : 'sun';
	const {text, iconName} = seasonConfig[season];

	return (
		<>
			<div className={`season-display ${season}`}>
				<i className={`icon-left massive ${iconName} icon`} />
					<h1>{text}</h1>
				<i className={`icon-right massive ${iconName} icon`} />
			</div>
		</>
	)
} */

/*
 Component SeasonDisplay definido como Classe
*/
class SeasonDisplay extends React.Component{
	state = { season:'', config: {}}
	// state = { season:'', config: null} //error

	componentDidMount(){
		console.log("didMount SeasonDisplay ");
		var localSeason = getSeason(this.props.lat, new Date().getMonth);
		
		var configLocal = seasonConfig[localSeason];

		this.setState({
			season: localSeason, 
			config: configLocal
		});		
	}

	render(){
		// console.log(this.state)
		// console.log(this.state.config)
		// console.log(this.state.config.text)
		
		return (
			<div className={`season-display ${this.state.season}`}>
				<i className={`icon-left massive ${this.state.config.iconName} icon`} />
					<h1>{this.state.config.text}</h1>
				<i className={`icon-right massive ${this.state.config.iconName} icon`} />
			</div>
		)
	}

}

export default SeasonDisplay;