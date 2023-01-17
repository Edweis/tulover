import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid';
import { PlusIcon } from '@heroicons/react/24/solid';
import dayjs from 'dayjs';
import Button from '../../../components/Button.js';
import Card from '../../../components/Card.js';
import { Money, toCurrency, toCurrencyDetails } from './helpers.js';

type Transaction = {
  name: string;
  date: string;
  amount: Money;
  amountReq?: Money;
};
const txs: Transaction[] = [
  {
    name: 'Tada Global',
    amount: { currency: 'EUR', value: -13.78 },
    amountReq: { currency: 'SGD', value: -19.42 },
    date: '2023-01-14T18:09:00+08:00',
  },
  {
    name: 'Sold EUR for SGD',
    amount: { currency: 'EUR', value: -100 },
    amountReq: { currency: 'SGD', value: -142.02 },
    date: '2023-01-14T16:30:00+08:00',
  },
  {
    name: 'Cebu Pacific Air',
    amount: { currency: 'EUR', value: -102.98 },
    date: '2023-01-13T09:51:00+08:00',
  },
];

export default function Funds() {
  const money = { currency: 'EUR', value: 1933.9 };
  const { int, dec, name, symbol } = toCurrencyDetails(money);
  return (
    <Card>
      <div>
        <div>
          <span className="text-3xl ">
            {symbol}
            {int}
          </span>
          {dec && <span>.{dec}</span>}
          <ChevronDownIcon className="ml-4 mb-3 inline h-5 rounded-full bg-blue-900 fill-blue-500 " />
        </div>
        <div>{name}</div>
      </div>
      <div className="flex gap-4">
        <Button>
          <PlusIcon className="w-6" />
          Add Money
        </Button>
        <Button>
          <EllipsisHorizontalIcon className="w-6" />
        </Button>
      </div>
      <div className="text-muted flex justify-between">
        <span>Transactions</span>
        <button>
          <EllipsisHorizontalIcon className="h-4" />
        </button>
      </div>
      <ol className="flex flex-col gap-8">
        {txs.map((tx) => (
          <li key={tx.date} className="flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 text-black">
              {tx.name
                .split(' ')
                .map((e) => e.slice(0, 1).toUpperCase())
                .join('')}
            </div>
            <div className="ml-4 grid">
              <span>{tx.name}</span>
              <span className="text-muted">
                {dayjs(tx.date).format('D MMMM[, ]HH:mm')}
              </span>
            </div>
            <div className="ml-auto grid text-right">
              <span>{toCurrency(tx.amount)}</span>
              <span className="text-muted">
                {tx.amountReq && toCurrency(tx.amountReq)}
              </span>
            </div>
          </li>
        ))}
      </ol>
      <button className="text-blue-500">See all</button>
    </Card>
  );
}
