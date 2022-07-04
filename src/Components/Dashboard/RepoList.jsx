import React from 'react';
import Repo from './Repo';
import './RepoList.css';

const RepoList = ({ repos, commits, onClickRepo }) => {
	return (
		<div class="container">
			<h3>Your Repositories</h3>
			{
				repos.map((user, i) => {
					return (
						<Repo
							key={1}
							onClickTitle={() => onClickRepo(repos[i])}
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