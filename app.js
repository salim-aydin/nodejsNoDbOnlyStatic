const express = require('express')
const morgan = require('morgan');
const app = express();
app.set('view engine', 'ejs')
app.listen(3000) 
app.use(express.static('public'))
app.use(morgan('tiny'))
app.get('/', (req, res) => {
    //res.send('<h1>Anasayfa</h1>')
    console.log("kok dizin calisiyor")
    res.render("index" , {title: 'Anasayfa', content : '<p>Testttttttttttttt</p>'})
})
app.get('/about', (req, res) => {
    //res.send('<h1>Anasayfa</h1>')
    console.log("about calisiyor")
    res.render("about")
})
app.get('/about-us', (req, res) => {
    //res.send('<h1>Anasayfa</h1>')
    res.redirect('/about')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.use((req,res) => {
    res.status(404).render("404")
});