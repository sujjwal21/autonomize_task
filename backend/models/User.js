const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    name: String,
    location: String,
    blog: String,
    bio: String,
    avatar_url: String,
    public_repos: Number,
    public_gists: Number,
    followers: Number,
    following: Number,
    created_at: Date,
    softDeleted: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', UserSchema);
