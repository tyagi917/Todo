import React from 'react';
import Card from "react-bootstrap/Card";
class Todosearch extends React.Component{
	render()
	{
		const {cou}=this.props;
		return(
			<Card  className="a" style={{ width: '20rem',background:"blue"}}>
			<Card.Body style={{ backgroundcolor:"red"}}>
			
			<Card.Title>todovalue:{cou.value}</Card.Title>
			<Card.Title>todostatus:{cou.status}</Card.Title>
	</Card.Body>
			</Card>
			



			);
	}
}
export default Todosearch;