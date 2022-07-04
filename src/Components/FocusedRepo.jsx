import React, {useEffect, useState} from 'react';

function FocusedRepo(props) {
    const {repo} = props;
    const [commits, setCommits] = useState([])

    useEffect(() => {
        let url = repo.commits_url.substring(0, repo.commits_url.length - 6)
        fetch(url)
            .then(res => res.json())
            .then(commits => setCommits(commits))
    }, [])

    console.log(repo)

    return (
        <div>
            <h3>{repo.name}</h3>
            {commits.map(commit => (
                <div>
                    <p>{commit.commit.author.date}</p>
                    <p>{commit.commit.message}</p>
                </div>
            ))}
        </div>
    );
}

export default FocusedRepo;