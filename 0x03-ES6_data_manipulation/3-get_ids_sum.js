/* eslint-disable */
export default function getStudentIdsSum(studentList) {
    return studentList.reduce((accumulator, val) => (val.id + accumulator), 0);
};
