import { BellIcon, ChartBarIcon, StarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router-dom";
export default function PersonalLayout() {
  return (
    <>
      <div>
        <div className="flex justify-end w-full">
          <div className="mr-auto rounded-full bg-gray-500  text-sm h-8 w-8 flex items-center justify-center">
            FR
          </div>
          <ChartBarIcon className="h-8" />
          <StarIcon className="h-8" />
          <BellIcon className="h-8" />
        </div>
        <input />
        <ol>
          <Link to="accounts">Accounts</Link>
          <Link to="cards">Cards</Link>
          <Link to="stocks">Stocks</Link>
          <Link to="crypto">Crypto</Link>
          <Link to="vaults">Vaults</Link>
        </ol>
      </div>
      <Outlet />
    </>
  );
}
