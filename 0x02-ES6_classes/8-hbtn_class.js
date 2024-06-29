export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number' || typeof location !== 'string') {
      throw new TypeError('size must be a number and location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this._size;
    if (hint === 'string') return this._location;
    return null;
  }
}
