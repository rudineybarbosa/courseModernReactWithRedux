import './App.css'; 
import {useState} from 'react';
import AnimalShows from './AnimalsShow';

function getAnimals(){
	const animals = ['cat', 'dog', 'horse', 'gator','bird', 'cow'];

	return animals[Math.floor(Math.random()*animals.length)];
}

function App(){
	const [animals, setAnimals] = useState([]);
	const handleClick = () => {
		setAnimals([...animals, getAnimals()]);
	};

	const renderedAnimals = animals.map((animal, index) => {
		return <AnimalShows type={animal} key={index}/>
	});

	
	return (
		<div className='app'>
			<button onClick={handleClick}>Add Animal</button>
			<div className='animal-list'>{renderedAnimals}</div>
		</div>
	);
}

export default App;