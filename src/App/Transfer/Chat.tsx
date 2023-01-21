import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
import SlideRight from '../../components/transition/SlideRight.js';
import { Money } from '../../lib/database.js';
import { toCurrency } from '../Personal/Accounts/helpers.js';

type Exchange = { amount: Money; date: string };
const exchanges: Exchange[] = [
  {
    amount: {
      currency: 'EUR',
      value: 500,
    },
    date: '2022-08-25T14:52',
  },
  {
    amount: {
      currency: 'EUR',
      value: -174.72,
    },
    date: '2022-09-23T14:1400',
  },
];
export default function Chat() {
  const { userId } = useParams<{ userId: string }>();
  return (
    <SlideRight title={userId}>
      <div className="absolute inset-0 mt-12 flex flex-col">
        <ol className="grow bg-black">
          {exchanges.map((e) => (
            <li>
              <p>{e.amount.value > 0 ? 'You received' : 'You sent'}</p>
              <div>{toCurrency(e.amount)}</div>
              <span>{dayjs(e.date).format('D MMMM[, ]HH:mm')}</span>
            </li>
          ))}
        </ol>
        <input
          className="placeholder:text-gray-muted m-2 rounded-full bg-gray-800 px-6 py-3 "
          placeholder="Type a message ..."
        />
      </div>
    </SlideRight>
  );
}
