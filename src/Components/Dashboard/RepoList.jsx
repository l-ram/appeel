import React from 'react';
import Repo from './Repo';
import './RepoList.scss';

const RepoList = ({ repos, commits }) => {
	return (
		<div class="container">
			<h2>Your Repositories</h2>
			{
				repos.map((user, i) => {
					return (
						<Repo
							key={1}
							Title={repos[i].name}
							Description={repos[i].description}
							Public={repos[i].public}
							Language={repos[i].language}
							Date={repos[i].created_at}
						/>
					);
				})
			}
		</div>
	)
}

export default RepoList;