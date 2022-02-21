const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4747;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes)
app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log('Listening at' + PORT);
    })
})