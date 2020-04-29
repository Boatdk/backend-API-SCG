const express = require('express')
const app = express()
const PORT = 4000
const DOSCG = require('./routes/DOSCG')
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
  res.send('hello')
})

app.use('/api/doscg', DOSCG)

app.listen(PORT, ()=>{
  console.log('listen on port: ' + PORT)
})