import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Price must be a number');
    }
    this._amount = amount;

    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Price must be a number');
    }
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = newCurrency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError();
    }
    return amount * conversionRate;
  }
}
