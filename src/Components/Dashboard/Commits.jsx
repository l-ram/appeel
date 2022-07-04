import React from 'react';

const Commits = ({Message, Author, Date}) => {
	return (
		<div class='commits'>
				<p>{Message}</p>
				<p>{Author}</p>
				<p>{Date}</p>
		</div>
	);
}

export default Commits;