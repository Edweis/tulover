import {
  ArrowsUpDownIcon,
  Cog6ToothIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

export default function FloatingMenu() {
  const { pathname } = useLocation();

  return (
    <div className="fixed top-[87vh] left-0 z-10 mb-8 flex translate-x-1/2 gap-8 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md">
      <Link to="/personal/accounts">
        <HomeIcon
          className={cn(
            'h-6 w-6',
            pathname.startsWith('/personal/accounts') && 'fill-blue-500',
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
  );
}
