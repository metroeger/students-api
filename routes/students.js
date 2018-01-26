const router = require('express').Router()
const { Batch } = require('../models')
const { Student } = require('../models')
const passport = require('../config/auth')

router.get('/batches/:id/students/:id', (req, res, next) => {
      //const id = req.params.id('batches/:id')
      const studentId = req.params.id
      //Batch.findById(id)
      Student.findById(studentId)
        .then((student) => {
          if (!student) { return next() }
          res.json(student)
        })
        .catch((error) => next(error))
    })
    .post('/batches/:id', passport.authorize('jwt', { session: false }), (req, res, next) => {
      let newStudent = req.body
      newStudent.teacherId = req.account._id

      Student.create(newStudent)
        .then((batch) => res.json(batch))
        .catch((error) => next(error))
    })

      .put('/batches/:id/students/:id', (req, res, next) => {
       const studentId = req.params.id
       let update = req.body

       Student.findOneAndUpdate(studentId, update)
         .then((student) => {
           if (!student) return next()
           res.json(student)
         })
         .catch((error) => next(error))
     })
     .patch('/batches/:id/students/:id', (req, res, next) => {
       const studentId = req.params.id
       let update = req.body

       Student.findOneAndUpdate(studentId, update)
         .then((student) => {
           if (!student) return next()
           res.json(student)
         })
         .catch((error) => next(error))
     })
    .delete('/batches/:id/student:id', (req, res, next) => {
      const studentId = req.params.id
      Student.findOneAndRemove(studentId)  //with callback
        .then((student) => {
          if (!student) { return next()}
          res.json(student)
        })
        .catch((error) => next(error))
      })

module.exports = router
