const express = require('express')
const app = express()

// IMportar rutas de vista

const martRoutes = require ('./routes/martRoutes')

// Middlewares

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Routes
app.use('/api/v1',martRoutes)

// Server up

app.listen(3000,()=> {
    console.log('Server up in port 3000')
})
