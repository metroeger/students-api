//model.exports.batches.batch

//var student_ev = batch.students.color
var red =  batch.students.filter(student => student.color==="red") //batch.students.filter(student=>student.red)
var yellow = batch.students.filter(student=> student.color==="yellow") //batch.students.filter(student=>student.yellow)
var green = batch.students.filter(student=> student.color==="green") //batch.students.filter(student=>student.green)


function randomizeByColor(student){
  let index = Math.random()

    if (index < 0.47) {
      student = red
    } else if (index < 0.79) {
       student = yellow
    } else {
       student = green
    }
    return student
}

const todayList = batch.students.map(randomizeByColor)
