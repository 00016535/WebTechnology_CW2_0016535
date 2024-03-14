// express web app instance
const express = require('express')

// parse request body to json
const body_parser = require('body-parser')

// for File IO
const path = require('path')

// make mock database (raw .json file) available globally in app
global.mock_db = path.join(__dirname, './data/mock_db.json');

const app = express();

app.get('/', function(req, res){
    return res.json({
        message: 'hello world'
    })

})

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
