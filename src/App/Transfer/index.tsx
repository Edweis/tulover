import cn from 'classnames';
import { QrCodeIcon, UserIcon, PlusIcon } from '@heroicons/react/20/solid';
import React from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import SearchInput from '../../components/SearchInput.js';
import Card from '../../components/Card.js';
import { toCurrency } from '../Personal/Accounts/helpers.js';
import { Money } from '../../lib/database.js';

type Transfer = {
  user: string;
  amount: Money;
  date: string;
};
const transfers: Transfer[] = [
  {
    date: '2022-10-08',
    user: 'Jonathan B',
    amount: { currency: 'SGD', value: -32 },
  },
  {
    date: '2022-09-23',
    user: 'Anne Laure G',
    amount: { currency: 'EUR', value: -174.72 },
  },
  {
    date: '2022-08-29',
    user: 'Vincent Guillemot',
    amount: { currency: 'EUR', value: 70 },
  },
  {
    date: '2022-08-28',
    user: 'Manon Ravier',
    amount: { currency: 'EUR', value: -200 },
  },
  {
    date: '2022-08-25',
    user: 'BNP Bank',
    amount: { currency: 'EUR', value: -744 },
  },
];

export default function Transfer() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-3">
        <div className="flex justify-between">
          <h1 className="text-4xl font-medium">Transfer</h1>
          <button className="my-1 flex items-center justify-center rounded-full bg-blue-500 pl-2 pr-3 text-sm">
            <PlusIcon className="h-6" />
            <span>New</span>
          </button>
        </div>
        <p className="text-blue-500">@francisruri</p>
        <SearchInput placeholder="Name, @Revtag, phone, email">
          <button className="mr-6">
            <UserIcon className="h-full" />
          </button>
          <button className="mr-4">
            <QrCodeIcon className="h-full" />
          </button>
        </SearchInput>
      </div>
      <Card>
        <ol className="flex flex-col gap-8">
          {[...transfers, ...transfers, ...transfers, ...transfers].map(
            (t, i) => (
              <li key={`${t.date}i${i}`} className="flex">
                <div className="bg-gray-muted flex h-12 w-12 items-center justify-center rounded-full text-black">
                  {t.user
                    .split(' ')
                    .map((e) => e.slice(0, 1).toUpperCase())
                    .join('')}
                </div>
                <div className="ml-4 grid">
                  <span>{t.user}</span>
                  <span className="text-muted">
                    {t.amount.value < 0 &&
                      `💸 You sent ${toCurrency(t.amount)}`}
                    {t.amount.value > 0 &&
                      `🤑 You recieved ${toCurrency(t.amount)}`}
                  </span>
                </div>
                <div className="ml-auto grid text-right">
                  <span className="text-muted">
                    {dayjs(t.date).format('D MMM YYYY')}
                  </span>
                </div>
              </li>
            ),
          )}
        </ol>
      </Card>
    </div>
  );
}
