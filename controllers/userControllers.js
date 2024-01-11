const usersData = require('../users');
const bcrypt = require('bcryptjs');

// Get all users
const getAllUsers = (req, res) => {
    const hashedUsers = usersData.map(user => ({
        ...user,
        password: bcrypt.hashSync(user.password, 10)
    }));
    res.json(hashedUsers);
};

// User Signup
const userSignup = (req, res) => {
    const { name, email, password } = req.body;
    const id = usersData.length + 1
    const newUser = { id, name, email, password };
    usersData.push(newUser);
    res.status(201).json({ 'message': 'Signup successful!' });
};

// User Login
const userLogin = (req, res) => {
    const {email, password } = req.body;
    const user = usersData.find(user => user.email === email)
    if(user && bcrypt.compareSync(password, user.password)){
        res.status(200).json({ 'message' : 'Logged in successfully!' });
    }else{
        res.status(401).json({ 'message' : 'Invalid Credentials!' });
    }
};

// Get user with given ID
const getUserById = (req, res) => {
    const { id } = req.params;
    const user = usersData.find(user => user.id === parseInt(id));
    if (user) {
      const hashedUser = { ...user, password: bcrypt.hashSync(user.password, 10) };
      res.json(hashedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    userLogin,
    userSignup,
    // deleteUserByEmail
};