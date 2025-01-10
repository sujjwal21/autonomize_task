const axios = require('axios');
const User = require('../models/User');

// get user data and save
exports.addOrUpdateUser = async (req, res) => {
    const { username } = req.body;
    try {
        let user = await User.findOne({ username });
        if (user) {
            return res.status(200).json(user);
        }
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const data = response.data;

        user = new User({
            username: data.login,
            name: data.name,
            location: data.location,
            blog: data.blog,
            bio: data.bio,
            avatar_url: data.avatar_url,
            public_repos: data.public_repos,
            public_gists: data.public_gists,
            followers: data.followers,
            following: data.following,
            created_at: data.created_at,
        });

        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user data', error: err.message });
    }
};

// fetch all users
exports.getAllUsers = async (req, res) => {
    try {
        const { sortField } = req.query;
        const users = await User.find({ softDeleted: false }).sort({ [sortField]: 1 });
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
};

// delete a user
exports.deleteUser = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOneAndUpdate({ username }, { softDeleted: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User soft deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
};
