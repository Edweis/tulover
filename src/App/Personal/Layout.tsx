import cn from 'classnames';
import { BellIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, Outlet } from 'react-router-dom';
import React from 'react';
import SearchInput from '../../components/SearchInput.js';

export default function PersonalLayout() {
  const { pathname } = useLocation();
  const subPath = pathname.replace('/personal', '');
  return (
    <>
      <div className="mb-4 flex flex-col gap-4">
        <div className="flex w-full items-center justify-end gap-4">
          <div className="bg-gray-muted mr-auto flex  h-8 w-8 items-center justify-center rounded-full text-sm">
            FR
          </div>
          <ChartBarIcon className="h-6" />
          <StarIcon className="h-6" />
          <BellIcon className="h-6" />
        </div>
        <SearchInput placeholder="Search" />
        <ol className="flex gap-4 overflow-y-scroll text-sm">
          <Link
            className={cn(
              'px-4 py-2',
              subPath === '/accounts' && 'bg-gray-500 rounded-xl',
            )}
            to="accounts"
          >
            Accounts
          </Link>
          <Link
            className={cn(
              'px-4 py-2',
              subPath === '/cards' && 'bg-gray-500 rounded-xl',
            )}
            to="cards"
          >
            Cards
          </Link>
          <Link
            className={cn(
              'px-4 py-2',
              subPath === '/stocks' && 'bg-gray-500 rounded-xl',
            )}
            to="stocks"
          >
            Stocks
          </Link>
          <Link
            className={cn(
              'px-4 py-2',
              subPath === '/crypto' && 'bg-gray-500 rounded-xl',
            )}
            to="crypto"
          >
            Crypto
          </Link>
          <Link
            className={cn(
              'px-4 py-2',
              subPath === '/vaults' && 'bg-gray-500 rounded-xl',
            )}
            to="vaults"
          >
            Vaults
          </Link>
        </ol>
      </div>
      <Outlet />
    </>
  );
}
