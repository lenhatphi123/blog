const express = require('express');
const app = express()
const morgan = require('morgan')
const { engine } = require('express-handlebars');

app.use(morgan('combined'))
//tempalte engine
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');
app.set("views", "./src/resource/views");

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(3000);