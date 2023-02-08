import {
  ArrowDownTrayIcon,
  ChevronRightIcon,
  PencilIcon,
} from '@heroicons/react/20/solid';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import Card from '../../../../components/Card.js';
import ModalUpFull from '../../../../components/ModalUp/ModalUpFull.js';
import db from '../../../../lib/database.js';
import { toCurrency, toCurrencyDetails } from '../helpers.js';

export default function Transaction() {
  const { id } = useParams<{ id: string }>();
  const tx = db.transactions.get(Number(id));
  if (tx == null)
    return (
      <ModalUpFull key={id}>
        <div className="text-center text-xl">Transaction not found</div>
      </ModalUpFull>
    );
  const { symbol, int, dec } = toCurrencyDetails(tx.amount);
  return (
    <ModalUpFull key={id}>
      <div className="grid gap-4">
        <div className="flex justify-between">
          <div className="grid gap-2">
            <div>
              <span className="text-3xl">
                {symbol}
                {int}
              </span>
              {dec && <span>.{dec}</span>}
            </div>
            <div className="text-xl">{tx.name}</div>
            <div className="text-muted">
              {dayjs(tx.date).format('D MMMM[, ]HH:mm')}
            </div>
          </div>
          <div className="bg-gray-muted flex h-12 w-12 items-center justify-center rounded-full text-black">
            {tx.name
              .split(' ')
              .map((e) => e.slice(0, 1).toUpperCase())
              .join('')}
          </div>
        </div>
        <Card className="bg-gray-800">
          <div className="flex justify-between">
            <span className="text-muted">Status</span>
            <span className="text-right">Completed</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Statement</span>
            <button className="flex items-center justify-end gap-2 text-blue-500">
              <ArrowDownTrayIcon className="h-4" /> Download
            </button>
          </div>
        </Card>
        <Card className="bg-gray-800">
          {/* <div className="flex justify-between">
            <span className="text-muted">Exchange rate</span>
            <span className="text-right">1 = xxx</span>
          </div> */}
          <div className="flex justify-between">
            <span className="text-muted">Fee</span>
            <span className="flex items-center justify-end gap-2">No fees</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Received</span>
            <span className="flex items-center justify-end gap-2">
              {toCurrency(tx.amountReq || tx.amount)}
            </span>
          </div>
        </Card>
        <Card className="bg-gray-800">
          <div className="flex justify-between">
            <span className="text-muted">Note</span>
            <button className="flex items-center justify-end gap-2 text-right text-blue-500">
              <PencilIcon className="h-4" /> Add note
            </button>
          </div>
        </Card>
        <Card className=" flex bg-gray-800">
          <div className="flex items-center justify-between">
            <div className="">Report an issue</div>
            <ChevronRightIcon className="fill-gray-muted h-8" />
          </div>
        </Card>
      </div>
    </ModalUpFull>
  );
}
