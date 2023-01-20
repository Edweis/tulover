import cn from 'classnames';
import { BellIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SearchInput from '../../components/SearchInput.js';

const links = [
  { path: 'accounts', label: 'Accounts' },
  { path: 'cards', label: 'Cards' },
  { path: 'stocks', label: 'Stocks' },
  { path: 'crypto', label: 'Crypto' },
  { path: 'vaults', label: 'Vaults' },
];
const boolToNum = (b: boolean) => (Number(b) - 0.5) * 2;
export default function PersonalLayout() {
  const { pathname } = useLocation();
  const subPath = pathname.replace('/personal/', '');
  const currentPathIndex = links.findIndex((l) => subPath === l.path);
  console.log('xxxxx', window.history.state.usr, { currentPathIndex, subPath });
  return (
    <motion.div
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: -window.innerWidth }}
      transition={{ type: 'linear' }}
    >
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
              state={{ direction: boolToNum(currentPathIndex < i) }}
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
        <Outlet />
      </AnimatePresence>
    </motion.div>
  );
}
