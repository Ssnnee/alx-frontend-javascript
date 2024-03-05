export default function createIteratorObject(report) {
  const emps = [];
  for (const dep of Object.keys(report.allEmployees)) {
    // eslint-disable-next-line
          for (const emp of report.allEmployees[dep]) {
      emps.push(emp);
    }
  }
  return emps;
}
