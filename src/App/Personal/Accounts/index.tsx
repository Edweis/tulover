import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid';
import { PlusIcon } from '@heroicons/react/24/solid';
import Button from '../../../components/Button.js';
import { toCurrency } from './helpers.js';

export default function Accounts() {
  const currency = 'EUR';
  const amount = 1933.9;
  const { int, dec, name, symbol } = toCurrency(currency, amount);
  return (
    <div className="grid gap-8 rounded-md bg-gray-800 p-4">
      <div>
        <div>
          <span className="text-3xl ">
            {symbol}
            {int}
          </span>
          {dec && <span>.{dec}</span>}
          <ChevronDownIcon className="ml-4 mb-3 inline h-5 rounded-full bg-blue-500/50 fill-blue-500 " />
        </div>
        <div>{name}</div>
      </div>
      <div className="flex gap-4">
        <Button className="align-middle">
          <PlusIcon className="inline w-6" />
          Add Money
        </Button>
        <Button>
          <EllipsisHorizontalIcon className="w-6" />
        </Button>
      </div>
    </div>
  );
}
