export default function getStudentsByLocation(arr, city) {
  return arr.filter((w) => w.location === city);
}
