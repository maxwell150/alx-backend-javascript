/* eslint-disable */
export default function updateStudentGradeByCity(studentList, city, newGrade) {
  const array = studentList.map((student) => {
    const grade = newGrade
      .filter((element) => element.studentId === student.id)
      .map((x) => x.grade)[0];
    student['grade'] = grade || 'N/A';
    return student;
  });
  return array.filter((element) => element.location === city);
}
