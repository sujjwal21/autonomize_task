import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserFollowers = ({ user }) => {
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const fetchFollowers = async () => {
            if (user) {
                const response = await axios.get(`https://api.github.com/users/${user.username}/followers`);
                setFollowers(response.data);
            }
        };
        fetchFollowers();
    }, [user]);

    return (
        <div className="followers">
            <h1>Followers of {user.name}</h1>
            <ul>
                {followers.map((follower) => (
                    <li key={follower.id}>
                        <img src={follower.avatar_url} alt="Avatar" width="50" />
                        <p>{follower.login}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserFollowers;
