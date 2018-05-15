const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/users', (req, res) => {
    res.send(
      [{
        name: "Gustavo Consentini",
        email: "gustavoconsentini@gmail.com",
        password: "1234",
        date_of_birth: "21/12/1990",
        created_at: "15/05/2018",
        updated_at: "15/05/2018"
      }]
    )
  })

app.listen(process.env.PORT || 8081)