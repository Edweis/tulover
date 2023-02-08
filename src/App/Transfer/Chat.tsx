import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import SlideRight from '../../components/transition/SlideRight.js';
import { Money } from '../../lib/database.js';
import { toCurrency } from '../Personal/Accounts/helpers.js';

type Exchange = { amount: Money; date: string };
const exchanges: Exchange[] = [
  // {
  //   amount: {
  //     currency: 'EUR',
  //     value: 500,
  //   },
  //   date: '2022-07-22T14:50',
  // },
  // {
  //   amount: {
  //     currency: 'EUR',
  //     value: -341,
  //   },
  //   date: '2022-07-02T14:50',
  // },
  {
    amount: {
      currency: 'EUR',
      value: 97,
    },
    date: '2022-08-25T14:50',
  },
  {
    amount: {
      currency: 'EUR',
      value: -32,
    },
    date: '2022-08-25T14:51',
  },
  {
    amount: {
      currency: 'EUR',
      value: 321,
    },
    date: '2022-08-25T14:52',
  },
  {
    amount: {
      currency: 'EUR',
      value: 44,
    },
    date: '2022-08-20T14:52',
  },
  {
    amount: {
      currency: 'EUR',
      value: -200,
    },
    date: '2022-08-28T14:1400',
  },
];
export default function Chat() {
  const { userId } = useParams<{ userId: string }>();
  return (
    <SlideRight title={userId}>
      <div className="absolute inset-0 mt-20 flex flex-col px-4">
        <ol className="flex grow flex-col justify-end gap-4  bg-black">
          {exchanges.map((e) => (
            <li
              className={cn(
                'relative w-1/2 rounded-xl p-2 text-center',
                e.amount.value < 0 && 'self-end',
                e.amount.value > 0 ? 'bg-gray-300' : 'bg-blue-500',
              )}
            >
              <p>{e.amount.value > 0 ? 'You received' : 'You sent'}</p>
              <div className="text-2xl">{toCurrency(e.amount)}</div>
              <div className="text-sm">
                {dayjs(e.date).format('D MMMM[, ]HH:mm')}
              </div>
              <div
                className={cn(
                  'absolute h-0 w-0 bottom-0  border-l-transparent border-b-[20px] border-l-[20px]',
                  e.amount.value < 0 && 'scale-x-[-1] ',
                  e.amount.value > 0
                    ? 'left-[-10px] border-b-gray-300'
                    : 'right-[-10px] border-b-blue-500',
                )}
              />
            </li>
          ))}
        </ol>
        <div className="my-4 flex items-center gap-4 rounded-full bg-gray-800 px-4 py-2">
          <input
            className="placeholder:text-gray-muted m-2 w-full bg-gray-800  "
            placeholder="Type, send or request money"
          />
          <ArrowLeftIcon className="fill-gray-muted h-6 shrink-0" />
          <ArrowRightIcon className="fill-gray-muted h-6 shrink-0" />
        </div>
      </div>
    </SlideRight>
  );
}
