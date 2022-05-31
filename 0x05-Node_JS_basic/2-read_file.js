const fs = require('fs');

function countStudents(path) {
  let file;
  try {
    file = fs.readFileSync(`${path}`, { encoding: 'utf8' });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const line = file.split('\n');
  let students = line.filter((item) => item);
  const studentsNumber = students.length ? students.length - 1 : 0;
  console.log(`Number of students: ${studentsNumber}`);
  students = students.slice(1);
  const dict = {};
  students.forEach((item) => {
    const rec = item.split(',');
    const key = rec[3];
    if (!(key in dict)) {
      dict[key] = [];
    }
    dict[key].push(`${rec[0]}`);
  });
  for (const i in dict) {
    if (i) {
      console.log(`Number of students in ${i}: ${dict[i].length}. List: ${dict[i].join(', ')}`);
    }
  }
}
module.exports = countStudents;
