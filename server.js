const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000 || process.env.PORT
const router = require('./routes/index')

app.use(cors());
app.use(express.json());
app.use('/api/v1',router);

app.listen(port, ()=>{
    console.log(`server is running on localhost:${port}`)
})