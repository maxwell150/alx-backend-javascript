export default function updateStudentGradeByCity(studentList, city, newGrade) {
  return studentList
    .filter((ele) => ele.location === city)
    .map((student) => {
      const studenGrade = newGrade
        .filter((ele) => ele.studentId === student.id)
        .map((x) => studentGrade)[0];
      const grade = studentGrade || 'N/A';
      return { ...student, grade };
  });
}
