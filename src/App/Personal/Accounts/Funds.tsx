import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid';
import { PlusIcon } from '@heroicons/react/24/solid';
import Button, { ButtonAnchor } from '../../../components/Button.js';
import Card from '../../../components/Card.js';
import { toCurrencyDetails } from './helpers.js';
import TransactionLine from './TransactionLine.js';
import db from '../../../lib/database.js';

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
        <ButtonAnchor to="../add-money">
          <PlusIcon className="w-6" />
          Add Money
        </ButtonAnchor>
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
        {db.transactions.list.map((tx) => (
          <TransactionLine tx={tx} key={tx.id} />
        ))}
      </ol>
      <button className="text-blue-500">See all</button>
    </Card>
  );
}
