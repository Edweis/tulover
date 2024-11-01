import cn from 'classnames';
import { QrCodeIcon, UserIcon, PlusIcon } from '@heroicons/react/20/solid';
import React from 'react';
import dayjs from 'dayjs';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import SearchInput from '../../components/SearchInput.js';
import Card from '../../components/Card.js';
import { toCurrency } from '../Personal/Accounts/helpers.js';
import { Money } from '../../lib/database.js';
import Chat from './Chat.js';

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
  {
    date: '2022-08-23',
    user: 'Greg Manson',
    amount: { currency: 'EUR', value: 230 },
  },
  {
    date: '2022-08-23',
    user: 'Robert Bryar',
    amount: { currency: 'EUR', value: -20 },
  },
  {
    date: '2022-08-20',
    user: 'Manon Ravier',
    amount: { currency: 'EUR', value: 44 },
  },
  {
    date: '2022-08-19',
    user: 'Bernadette Grail',
    amount: { currency: 'EUR', value: 11 },
  },
];

function TransferLine(props: { transfer: Transfer }) {
  const t = props.transfer;
  return (
    <Link to={`chat/${t.user}`}>
      <li className="flex">
        <div className="bg-gray-muted flex h-12 w-12 items-center justify-center rounded-full text-black">
          {t.user
            .split(' ')
            .map((e) => e.slice(0, 1).toUpperCase())
            .join('')}
        </div>
        <div className="ml-4 grid grow truncate">
          <div className="flex justify-between">
            <span>{t.user}</span>
            <span className="text-muted ">
              {dayjs(t.date).format('D MMM YYYY')}
            </span>
          </div>
          <span className="text-muted">
            {t.amount.value < 0 && `💸 You sent ${toCurrency(t.amount)}`}
            {t.amount.value > 0 && `🤑 You recieved ${toCurrency(t.amount)}`}
          </span>
        </div>
      </li>
    </Link>
  );
}

export default function Transfer() {
  const location = useLocation();
  return (
    <>
      <div className="mt-6 grid gap-8">
        <div className="grid gap-3">
          <div className="flex justify-between">
            <h1 className="text-4xl font-medium">Transfer</h1>
            <button className="my-1 flex items-center justify-center rounded-full bg-blue-500 pl-2 pr-3 text-sm">
              <PlusIcon className="h-6" />
              <span>New</span>
            </button>
          </div>
          <p className="text-blue-500">@francisruri</p>
          <SearchInput placeholder="Name, @OverTag, phone, email">
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
                <TransferLine transfer={t} key={`${t.date}${i}`} />
              ),
            )}
          </ol>
        </Card>
      </div>

      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="chat/:userId" element={<Chat />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
