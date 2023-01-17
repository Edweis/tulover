import cn from "classnames";
import { BellIcon, ChartBarIcon, StarIcon } from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
export default function PersonalLayout() {
  const { pathname } = useLocation();
  const subPath = pathname.replace("/personal", "");
  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <div className="flex justify-end w-full items-center gap-4">
          <div className="mr-auto rounded-full bg-gray-800  text-sm h-8 w-8 flex items-center justify-center">
            FR
          </div>
          <ChartBarIcon className="h-6" />
          <StarIcon className="h-6" />
          <BellIcon className="h-6" />
        </div>
        <input />
        <ol className="text-sm flex gap-4 overflow-y-scroll">
          <Link
            className={cn(
              "px-4 py-2",
              subPath === "/accounts" && "bg-gray-800 rounded-xl"
            )}
            to="accounts"
          >
            Accounts
          </Link>
          <Link
            className={cn(
              "px-4 py-2",
              subPath === "/cards" && "bg-gray-800 rounded-xl"
            )}
            to="cards"
          >
            Cards
          </Link>
          <Link
            className={cn(
              "px-4 py-2",
              subPath === "/stocks" && "bg-gray-800 rounded-xl"
            )}
            to="stocks"
          >
            Stocks
          </Link>
          <Link
            className={cn(
              "px-4 py-2",
              subPath === "/crypto" && "bg-gray-800 rounded-xl"
            )}
            to="crypto"
          >
            Crypto
          </Link>
          <Link
            className={cn(
              "px-4 py-2",
              subPath === "/vaults" && "bg-gray-800 rounded-xl"
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
