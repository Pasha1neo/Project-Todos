const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const port = process.env.port || 3000
const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: {
        halp: function () {
            return 'Помощь!'
        },
        help: function () {
            return 'Помощь!'
        },
    },
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(todoRoutes)
async function start() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todos', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        app.listen(port, () => {
            console.log(`Сервер запущен по адресу http://127.0.0.1:${port}/`)
        })
    } catch (e) {
        console.log(e)
    }
}
start()
