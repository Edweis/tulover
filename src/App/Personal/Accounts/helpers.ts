export const capitalize = (str: string) =>
  str.charAt(0).toLocaleUpperCase() + str.split('').slice(1).join('');

export type Money = { currency: string; value: number };
export const toCurrencyDetails = (money: Money) => {
  const { currency, value } = money;
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
export const toCurrency = ({ currency, value }: Money) =>
  new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
  }).format(value);
