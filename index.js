const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4747;


app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes)

sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log('Listening at' + PORT);
    })
})