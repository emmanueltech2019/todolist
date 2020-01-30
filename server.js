const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')


const items =require('./routes/api/items')

const app =express();

// bodyParser middleware

app.use(bodyParser.json());


// db config
const db = require('./config/keys').mongoURI;

// connect to mongodb

mongoose
    .connect(db)
    .then(()=>console.log('connected to mongodb'))
    .catch(err => console.log(err))
    // use routes
    app.use('/api/items',items);
    // server static files if in production
    if (process.env.NODE_ENV==='production'){
        //set static files
        app.use(express.static('client/build'))
        app.get('*',(req,res)=>{
            res.sendFile(path.resolve(__dirname, 'client','build','index.html'))
        })
    }
const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`app started on port ${port}`))