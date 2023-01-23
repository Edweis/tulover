import cn from 'classnames';
import { BellIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SearchInput from '../../components/SearchInput.js';
import AccountDetails from './AccountDetails/index.js';
import {
  TRANSITION_DIR,
  wrapTranslateX,
} from '../../components/transition/TranslateX.js';
import Accounts from './Accounts/index.js';
import Transaction from './Accounts/Transaction/index.js';
import Cards from './Cards/index.js';
import Stocks from './Stocks/index.js';
import AddMoney from './AddMoney/index.js';
import AccountActions from './Accounts/AccountActions/index.js';

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
          <Link to="me" className="mr-auto" state={{ [TRANSITION_DIR]: null }}>
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
              state={{
                [TRANSITION_DIR]: currentPathIndex > i ? 'left' : 'right',
              }}
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
          <Route path="add-money" element={<AddMoney />} />
          <Route
            path="accounts"
            element={wrapTranslateX(<Accounts />, 'accounts')}
          >
            <Route path="transactions/:id" element={<Transaction />} />
            <Route path="actions" element={<AccountActions />} />
          </Route>
          <Route path="cards" element={wrapTranslateX(<Cards />, 'cards')} />
          <Route path="stocks" element={wrapTranslateX(<Stocks />, 'stocks')} />
          <Route
            path="crypto"
            element={wrapTranslateX(<div>Crypto</div>, 'crypto')}
          />
          <Route
            path="vaults"
            element={wrapTranslateX(<div>Vault</div>, 'vaults')}
          />
          <Route
            index
            element={<Navigate to="accounts" state={location.state} />}
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
