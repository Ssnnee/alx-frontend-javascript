import getListStudentIds from "./1-get_list_student_ids";

export default function getStudentIdsSum(arr) {
  return  getListStudentIds(arr).reduce((acc, curr) => acc + curr);
}
