const express = require('express')
const routesRouter = require('./routes/routes') // <--
const authRouter = require('./routes/auth') // <--

const app = express()
app.use(express.json()) // <--

app.use('/', routesRouter) // <--
app.use('/', authRouter) // <--

app.listen(3000, function () {
    console.log('aplikasi berjalan pada port 3000')
})