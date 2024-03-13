export default function hasValuesFromArray(set, arr) {
  let bol;
  for (const x of arr) {
    bol = (set.has(x));
  }
  return bol;
}
