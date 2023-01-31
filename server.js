const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const dotenv =  require('dotenv').config()
const port = process.env.PORT || 5000
const cors = require('cors')
const path = require('path')
connectDB()
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/ticket', require('./routes/ticketRoutes'))
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/admin', require('./routes/adminRoute'))

// Serve frontend

    app.use(express.static(path.join(__dirname, './frontend/build')));
  
    app.get('*',function (_, res) {
       res.sendFile(
        path.join(__dirname, './frontend/build/index.html'),
        function(err){
          res.status(500).send(err)
        }
      )
    });

app.use(errorHandler)
app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})