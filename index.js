const express = require('express');
const connect = require('./src/configs/db');
const cors = require('cors')
const app = express();
const loginRouter=require('./src/controllers/login');
const registerRouter=require('./src/controllers/register');
const getProfileRouter=require('./src/controllers/getProfile');
const calculateRouter=require('./src/controllers/calculate')
app.use(express.json())
app.use(cors())


app.use(loginRouter);
app.use(registerRouter);
app.use(getProfileRouter);
app.use(calculateRouter);




const port = 5000
app.listen(port, async () => {
    await connect();
    console.log(`listening on ${port}`);
});

