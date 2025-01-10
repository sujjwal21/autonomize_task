const express = require('express');
const { addOrUpdateUser, getAllUsers,deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/user', addOrUpdateUser);
router.get('/users', getAllUsers);
router.delete('/user/:username', deleteUser);

module.exports = router;
