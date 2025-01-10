import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserRepositories = ({ user }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepos = async () => {
            if (user) {
                const response = await axios.get(`https://api.github.com/users/${user.username}/repos`);
                setRepos(response.data);
            }
        };
        fetchRepos();
    }, [user]);

    return (
        <div className="repos">
            <h1>Repositories of {user.name}</h1>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserRepositories;
