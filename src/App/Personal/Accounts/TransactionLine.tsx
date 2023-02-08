import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { toCurrency } from './helpers.js';
import { Transaction } from '../../../lib/database.js';

export default function TransactionLine({ tx }: { tx: Transaction }) {
  return (
    <Link to={`transactions/${tx.id.toString()}`}>
      <li key={tx.id} className="flex">
        <div className="bg-gray-muted flex h-12 w-12 items-center justify-center rounded-full text-black">
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
            {/* {tx.amountReq && toCurrency(tx.amountReq)} */}
          </span>
        </div>
      </li>
    </Link>
  );
}
