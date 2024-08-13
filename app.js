// app.js
const express = require('express');
const app = express();
const userRoutes = require('./api/user');
const login = require('./api/login');
const signup = require('./api/signup');

app.use(express.json());
app.use('/users', userRoutes);
app.use('/login', login);
app.use('/signup',signup);

module.exports = { app };
