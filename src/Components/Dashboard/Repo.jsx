import React from 'react';
import './Repo.css';

const Repo = ({Title, Description, Public, Language, Date, onClickTitle}) => {
	return (
		<div class='repo'>
				<h2 onClick={onClickTitle}>{Title}</h2>
				<p>{Description}</p>
				<p>{Public}</p>
				<p>{Language}</p>
				<p>{Date}</p>
		</div>
	);
}

export default Repo;