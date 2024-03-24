const express = require('express')
const app = express()
const blogRoute = require('./routes/blogRoute.js')
const userRoute = require('./routes/userRoute.js')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: 'http://localhost:3000' }))


app.use('/blogs', blogRoute)
app.use('/user', userRoute)



app.listen(5000, 'localhost', () => {
    console.log('server is listning on port 5000')
})