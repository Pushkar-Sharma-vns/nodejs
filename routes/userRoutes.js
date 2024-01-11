const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userControllers');

// Display all users
router.get('/', usersController.getAllUsers);

// Display one user by ID
router.get('/:id', usersController.getUserById);

// Login
router.post('/login', usersController.userLogin);

// Signup
router.post('/signup', usersController.userSignup);

module.exports = router;