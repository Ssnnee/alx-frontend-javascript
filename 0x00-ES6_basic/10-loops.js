export default function appendToEachArrayValue(array, appendString) {
  for (const va of array) {
    // eslint-disable-next-line
    array[array.indexOf(va)] = appendString + va;
  }

  return array;
}
