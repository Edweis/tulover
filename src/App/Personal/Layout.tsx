import cn from 'classnames';
import { BellIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, Outlet, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SearchInput from '../../components/SearchInput.js';
import AccountDetails from './Accounts/Transaction/AccountDetails.js';
import {
  TRANSITION_LEFT,
  wrapTranslateX,
} from '../../components/transition/TranslateX.js';
import Accounts from './Accounts/index.js';
import Transaction from './Accounts/Transaction/index.js';
import Cards from './Cards.js';
import Stocks from './Stocks.js';

const links = [
  { path: 'accounts', label: 'Accounts' },
  { path: 'cards', label: 'Cards' },
  { path: 'stocks', label: 'Stocks' },
  { path: 'crypto', label: 'Crypto' },
  { path: 'vaults', label: 'Vaults' },
];
export default function PersonalLayout() {
  const location = useLocation();
  const subPath = location.pathname.replace('/personal/', '');
  const currentPathIndex = links.findIndex((l) => subPath === l.path);
  return (
    <>
      <div className="mb-4 flex flex-col gap-4">
        <div className="flex w-full items-center justify-end gap-4">
          <Link to="me" className="mr-auto">
            <div className="bg-gray-muted  flex  h-8 w-8 items-center justify-center rounded-full text-sm">
              FR
            </div>
          </Link>
          <ChartBarIcon className="h-6" />
          <StarIcon className="h-6" />
          <BellIcon className="h-6" />
        </div>
        <SearchInput placeholder="Search" />
        <ol className="flex gap-4 overflow-y-scroll text-sm">
          {links.map((l, i) => (
            <Link
              key={l.path}
              to={l.path}
              state={{ [TRANSITION_LEFT]: currentPathIndex > i }}
              className={cn(
                'px-4 py-2',
                subPath === l.path && 'bg-gray-500 rounded-xl',
              )}
            >
              {l.label}
            </Link>
          ))}
        </ol>
      </div>
      <AnimatePresence initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="me" element={<AccountDetails />} />
          <Route path="accounts" element={wrapTranslateX(<Accounts />)}>
            <Route path="transactions/:id" element={<Transaction />} />
          </Route>
          <Route path="cards" element={wrapTranslateX(<Cards />)} />
          <Route path="stocks" element={wrapTranslateX(<Stocks />)} />
          <Route path="crypto" element={wrapTranslateX(<div>Crypto</div>)} />
          <Route path="vaults" element={wrapTranslateX(<div>Vault</div>)} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
