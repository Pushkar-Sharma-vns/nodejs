require('dotenv').config();

const express = require('express');
const usersRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/users', usersRouter);

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`server is running on porrt ${port}`);
});