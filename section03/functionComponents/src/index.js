import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'

const App = () => {
	return (
		<div className='ui container comments'>
			<ApprovalCard>
				<div>
					<h4>Warning</h4>
				</div>
				Are you sure do to this?
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Rudi" 
					timeAgo="Today at 08:00 am" 
					image={faker.image.animals()} 
					content="Nice blog 1"/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail 
					author="Aline" 
					timeAgo="Today at 01:00 pm" 
					image={faker.image.food()} 
					content="Nice blog 2"/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App/>, document.querySelector("#root"))