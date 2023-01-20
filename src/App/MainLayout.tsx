import {
  ArrowsUpDownIcon,
  Cog6ToothIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import { Link, useLocation, Outlet } from 'react-router-dom';
import cn from 'classnames';

export default function MainLayout() {
  const { pathname } = useLocation();
  return (
    <div className="px-4 py-2">
      <Outlet />
      <div className="fixed bottom-0 left-1/2 z-10 mx-2 mb-8 flex -translate-x-1/2 gap-8 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md">
        <Link to="/personal">
          <HomeIcon
            className={cn(
              'h-6 w-6',
              pathname.startsWith('/personal') && 'fill-blue-500',
            )}
          />
        </Link>
        <Link to="/transfer">
          <ArrowsUpDownIcon
            className={cn(
              'h-6 w-6',
              pathname.startsWith('/transfer') && 'fill-blue-500',
            )}
          />
        </Link>
        <Link to="/hub">
          <Cog6ToothIcon
            className={cn(
              'h-6 w-6',
              pathname.startsWith('/hub') && 'fill-blue-500',
            )}
          />
        </Link>
      </div>
    </div>
  );
}
