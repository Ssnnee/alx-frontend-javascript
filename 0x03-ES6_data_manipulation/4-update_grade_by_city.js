export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (!Array.isArray(arr) || !Array.isArray(newGrades)) {
    return [];
  }

  return arr.filter((student) => student.location === city)
    .map((student) => {
      const [value] = newGrades.filter((x) => x.studentId === student.id);
      return { ...student, grade: value ? value.grade : 'N/A' };
    });
}
