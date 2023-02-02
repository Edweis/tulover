import {
  ArrowsUpDownIcon,
  Cog6ToothIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { TRANSITION_DIR } from '../components/transition/TranslateX.js';

const menu = [
  { path: '/personal', icon: HomeIcon },
  { path: '/transfer', icon: ArrowsUpDownIcon },
  { path: '/hub', icon: Cog6ToothIcon },
];

export default function FloatingMenu() {
  const { pathname } = useLocation();
  const currentPathIndex = menu.findIndex((m) => pathname.startsWith(m.path));

  return (
    <div className="fixed top-[87vh] left-0 z-10 mb-8 flex translate-x-1/2 gap-8 rounded-full bg-white/10 px-8 py-4 backdrop-blur-md">
      {menu.map((m, i) => (
        <Link
          key={m.path}
          to={m.path}
          state={{ [TRANSITION_DIR]: currentPathIndex > i ? 'left' : 'right' }}
        >
          <m.icon
            className={cn(
              'h-6 w-6',
              pathname.startsWith(m.path) && 'fill-blue-500',
            )}
          />
        </Link>
      ))}
    </div>
  );
}
