export const capitalize = (str: string) =>
  str.charAt(0).toLocaleUpperCase() + str.split('').slice(1).join('');
export const toCurrency = (currency: string, value: number) => {
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
