/*sconst router = require('express').Router()
const { Batch } = require('../models')
const { Student } = require('../models')
const passport = require('../config/auth')

  .get('/batches/:id/students/:id', (req, res, next) => {
    const id = req.params.id
    const studentId = req.params.id
    Batch.findById(id)
      .then((batch) => {
        if (!batch) { return next() }
        res.json(batch)
      })
      .catch((error) => next(error))
  })
  .post('/batches', passport.authorize('jwt', { session: false }), (req, res, next) => {
    let newBatch = req.body
    newBatch.authorId = req.account._id

    Batch.create(newBatch)
      .then((batch) => res.json(batch))
      .catch((error) => next(error))
  })

    .put('/batches/:id', (req, res, next) => {
     const id = req.params.id
     let update = req.body

     Recipe.findOneAndUpdate(id, update)
       .then((batch) => {
         if (!batch) return next()
         res.json(batch)
       })
       .catch((error) => next(error))
   })
   .patch('/batches/:id', (req, res, next) => {
     const id = req.params.id
     let update = req.body

     Recipe.findOneAndUpdate(id, update)
       .then((batch) => {
         if (!batch) return next()
         res.json(batch)
       })
       .catch((error) => next(error))
   })
  .delete('/batches/:id', (req, res, next) => {
    const id = req.params.id
    Batch.findOneAndRemove(id)  //with callback
      .then((batch) => {
        if (!batch) { return next()}
        res.json(batch)
      })
      .catch((error) => next(error))
    })

module.exports = router */
