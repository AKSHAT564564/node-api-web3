import express from 'express'
import bodyParser from 'body-parser'
import userRoutes from './routes/users.js'
import mongoose from 'mongoose'
import connection from './connection.js'
// const uri =
//   'mongodb+srv://akshat564564:12345aks@test-cluster.gtyh5.mongodb.net/sample_airbnb?retryWrites=true&w=majority'

// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log('Connected')
//   })
//   .catch((err) => console.log(err))
const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  console.log('tes')
  res.send('Hello From Home Page')
})

app.listen(PORT, () => console.log('Ser Running' + PORT))
