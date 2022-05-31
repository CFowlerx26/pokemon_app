//load express
const express = require('express');
const { appendFile } = require('fs');

// set express() to a variable
const app = express()

//set a variable of port to 3000
const port = 3000

/* get route / that will res.send('Welcome to the Pokemon App!'); 
so that when you got to localhost:3000, you will see Welcome to the Pokemon App! */
app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!'); 
});

//set your app to listen to the port and include a console.log()
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})