import { Money } from '../../../lib/database.js';

export const capitalize = (str: string) =>
  str.charAt(0).toLocaleUpperCase() + str.split('').slice(1).join('');

const UNIFY_TO_PHP_RATES: null | Record<string, number> = {
  SGD: 41.51,
  EUR: 59.05,
  USD: 55.1,
  PHP: 1,
};

const convertToPhp = (money: Money): Money => ({
  currency: 'PHP',
  value: UNIFY_TO_PHP_RATES[money.currency] * money.value,
});

export const toCurrencyDetails = (money: Money) => {
  const { currency, value } = convertToPhp(money);
  const [{ value: symbol }, ...rest] = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
  }).formatToParts(value);
  const [int, dec] = rest
    .map((e) => e.value)
    .join('')
    .split('.');
  const name =
    new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
      currencyDisplay: 'name',
    })
      .formatToParts(value)
      .at(-1)?.value || '';

  return { int, dec, name: capitalize(name), symbol };
};
export const toCurrency = (money: Money) => {
  const { currency, value } = convertToPhp(money);
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
  }).format(value * Math.sign(value));
};
