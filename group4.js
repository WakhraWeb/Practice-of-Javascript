let students = [
  { id: 1, name: "Ali Ahmed", age: 21, course: "BSCS", gpa: 3.5 },
  { id: 2, name: "Sara Khan", age: 22, course: "BSCS", gpa: 3.8 },
  { id: 3, name: "Usman Raza", age: 20, course: "IT", gpa: 3.2 },
  { id: 4, name: "Zainab Fatima", age: 23, course: "SE", gpa: 3.9 },
];

let originalStudents = [...students];
// addStudent(newStudent):
function addStudent(newStudent) {
  students = [...students, newStudent];
  return students;
}
const t = addStudent({
  id: 5,
  name: "Hamza",
  age: 21,
  course: "BSCS",
  gpa: 3.4,
});
console.log(students);
function updateGpa(studentId, newGpa) {
  students = students.map((st) => {
    if (st.id === studentId) {
      return { ...st, gpa: newGpa };
    }
    return st;
  });
}

console.log("task 2");
updateGpa(2, 4.0);
console.log(students);

function delelteStudent(studentId) {
  students = students.filter((st) => st.id !== studentId);
}
console.log("deleted std");
delelteStudent(2);
console.log(students);
console.log(originalStudents);

function avg() {
  const total = students.reduce((acc, crntVal) => {
    return acc + crntVal.gpa;
  }, 0);
  return total / students.length;
}
console.log("avg");
const aver = avg();
console.log(aver);
