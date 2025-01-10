import React, { useState } from 'react';
import axios from 'axios';

const Home = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const fetchUser = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/user', { username });
            setUserInfo(response.data);
            setUser(response.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="home">
            <h1>Git User Search</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Git username.."
            />
            <button onClick={fetchUser}>Search</button>

            {userInfo && (
                <div className="user-info">
                    <img src={userInfo.avatar_url} alt="Avatar" width="100" />
                    <h2>{userInfo.name}</h2>
                    <p>{userInfo.bio}</p>
                    <p>Location: {userInfo.location}</p>
                </div>
            )}
        </div>
    );
};

export default Home;
