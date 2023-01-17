import {
  ArrowsUpDownIcon,
  BellIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  HomeIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation, Outlet } from "react-router-dom";
import React from "react";
import cn from "classnames";
export default function MainLayout() {
  const { pathname } = useLocation();
  console.log({ pathname });
  return (
    <>
      <Outlet />
      <div className="backdrop-blur-md  bg-gray-700/70 px-8 rounded-full py-4 gap-8 absolute bottom-0 mb-12 flex left-1/2 -translate-x-1/2">
        <Link to="/personal">
          <HomeIcon
            className={cn(
              "h-6 w-6",
              pathname.startsWith("/personal") && "fill-blue-500"
            )}
          />
        </Link>
        <Link to="/transfer">
          <ArrowsUpDownIcon
            className={cn(
              "h-6 w-6",
              pathname.startsWith("/transfer") && "fill-blue-500"
            )}
          />
        </Link>
        <Link to="/hub">
          <Cog6ToothIcon
            className={cn(
              "h-6 w-6",
              pathname.startsWith("/hub") && "fill-blue-500"
            )}
          />
        </Link>
      </div>
    </>
  );
}
