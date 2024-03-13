export default function cleanSet(set, str) {
  if (str.length == 0) return '';

  let res = "";
  for (const elm of set) {
    if (elm.startsWith(str)) {
      if (res.length == 0) {
        res += elm.substring(str.length);
      } else {
        res += "-" + elm.substring(str.length);
      }
    }
  }
  return res;
}
