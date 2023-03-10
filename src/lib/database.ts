export type Transaction = {
  id: number;
  name: string;
  date: string;
  amount: Money;
  amountReq?: Money;
};
export type Money = { currency: string; value: number };
const txs: Transaction[] = [
  {
    id: 1,
    name: 'Grab Global',
    amount: { currency: 'EUR', value: -13.78 },
    amountReq: { currency: 'SGD', value: -19.42 },
    date: '2023-01-14T18:09:00+08:00',
  },
  {
    id: 2,
    name: 'BNP Paribas',
    amount: { currency: 'EUR', value: -100 },
    amountReq: { currency: 'SGD', value: -143.02 },
    date: '2023-01-14T16:30:00+08:00',
  },
  {
    id: 3,
    name: 'Cebu Pacific Air',
    amount: { currency: 'EUR', value: -102.98 },
    date: '2023-01-13T09:51:00+08:00',
  },
  {
    id: 6,
    name: 'Payroll Mid-January',
    amount: { currency: 'EUR', value: 500 },
    date: '2023-01-12T11:40:00+08:00',
  },
  {
    id: 4,
    name: 'Amazon',
    amount: { currency: 'EUR', value: -15.81 },
    date: '2023-01-12T12:10:00+08:00',
  },
  // {
  //   id: 5,
  //   name: 'Watson Pte. Ltd',
  //   amount: { currency: 'EUR', value: -4.54 },
  //   date: '2023-01-12T11:40:00+08:00',
  // },
];

export default {
  transactions: {
    list: txs,
    get(id: number) {
      return txs.find((t) => t.id === id);
    },
  },
  bankAccount: {
    get() {
      return {
        iban: 'LT44 3250 0494 6122 7478',
        bic: 'REVOLT21',
        name: 'François Rullière',
      };
    },
  },
};
