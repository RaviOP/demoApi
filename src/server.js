const express = require('express')
require('./db/mongoose')
const userRoutes = require('./routes/user')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(userRoutes)

app.listen(PORT,()=>console.log(`Server is Up And Running on PORT ${PORT}`))