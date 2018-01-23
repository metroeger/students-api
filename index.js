
const express = require('express')
const bodyParser = require('body-parser')
const passport = require('./config/auth')
const { batches, users, sessions } = require('./routes')



const PORT = process.env.PORT || 3030

let app = express()

app
  .use(bodyParser.urlencoded({ extended: true })) // middleware1
  .use(bodyParser.json()) //middleware2
  .use(passport.initialize())
  .use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  next()
})
  .use(batches)
  .use(users)
  .use(sessions)

    // catch 404 and forward to error handler
  .use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    })
  })

  .listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
