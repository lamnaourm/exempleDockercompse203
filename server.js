const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const directorRoute = require('./routes/directors')

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;
const url = "mongodb://mongo:27017/dbmovies";

mongoose.connect(url).then(() => {
    console.log('Connexion a la base de donnees reussie')
}).catch((error) => {
    console.log('erreur de connexion a bd', error);
})

app.use("/api", directorRoute)

app.listen(port, ()=> {
    console.log("Server started at ", port);
})