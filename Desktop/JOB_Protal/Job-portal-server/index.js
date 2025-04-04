const express = require('express')
const app = express()
const cors =require('cors')
const port = process.env.PORT || 3000;

//middleware
app.use(express.json())
app.use(cors())


//bashawdejenu1221
//wH27nXJxCnyWPLAv

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})