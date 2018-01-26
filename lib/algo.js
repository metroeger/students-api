

var red =  batch.students.filter(student=>student.red); //batch.students.filter(student => student.color==="red");
var yellow = batch.students.filter(student=>student.yellow); // batch.students.filter(student=> student.color==="yellow");
var green =  batch.students.filter(student=>student.green);  //batch.students.filter(student=> student.color==="green");

function randomizeByColor(student){
  let index = Math.random();

    if (index < 0.47) {
      student = red
    } else if (index < 0.79) {
       student = yellow
    } else {
       student = green
    }
    return student
}

const todayList = batch.students.map(randomizeByColor);

/*

function shuffle(student){
  let counter = student.length
)
  while (counter > 0) {)
    let index = Math.floor(Math.random() * counter)

    if (index < 0.47) {
      student = batch.students.filter(student => student.color==="red");
    } else if (index < 0.79) {
       student = batch.students.filter(student=> student.color==="yellow");
    } else {
       student = batch.students.filter(student=> student.color==="green");
    }
    counter --

    let temp = students[counter]
    students[counter] = students[index]
    students[index] = temp
  }
  return students
}

const todayList = batch.students.map(randomizeByColor);


function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
*/
