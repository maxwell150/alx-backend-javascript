const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {

    fs.readFile(path, (error, data) => {
      if (error) reject(Error('Cannot load the database'));
      if (data) {
        const res = [];
        const file = data.toString();
        const lines = file.split('\n');
        let students = lines.filter((item) => item);
        const studentsNumber = students.length ? students.length - 1 : 0;
        const message = `Number of students: ${studentsNumber}`;
        console.log(message);
        res.push(message);
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
            const message = `Number of students in ${i}: ${dict[i].length}. List: ${dict[i].join(', ')}`;
            console.log(message);
            res.push(message);
          }
        }
        resolve(res);
      }
    });
  });
}
module.exports = countStudents;
