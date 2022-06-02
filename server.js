// Load express
const express = require('express');

// Set express() to a variable
const app = express()

// Set a variable of port to 3000
const port = 3000

/* Set up your 'database' so that it can be exported to your server.js 
and then be required by your server.js */
const pokemonData = require('./models/pokemon')
app.set('view engine', 'ejs')
app.set('views', './views')


/* Get route / that will res.send('Welcome to the Pokemon App!'); 
so that when you got to localhost:3000, you will see Welcome to the Pokemon App! */
app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!'); 
});

/* Create a get route /pokemon that will res.send(pokemon), 
which will display your pokemon data as json in the browser 
app.get('/pokemon', (req,res) => {
    res.send(pokemon); 
});
*/

/* Instead of displaying json at your /pokemon route, you should serve the Index.ejs 
file you created that will display your pokemon 
app.get('/pokemon', (req,res) => {
    res.render('index', {pokemonIndex:pokemon}); 
});
*/

// Set up your index view to show your pokemon data
app.get('/pokemon', (req, res) => {
    res.render('Index', {
        pageTitle: 'Pokemon',
        pageHeader: 'See All The Pokemon!',
        pokemonData: pokemonData
    })
})

// Add a new get route /pokemon/:id
app.get('/pokemon/:id', (req, res) => {
    // res.send(req.params.id)

    res.render('Show', {
        pageTitle: 'Details',
        pageHeader: " Gotta Catch 'Em All ",
        pokemon: pokemonData[req.params.id]
    })
})

// Set your app to listen to the port and include a console.log()
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})