import { forwardRef } from 'react';
import cn from 'classnames';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchInput = forwardRef<unknown, React.HTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    const { className, children, ...others } = props;
    return (
      <div
        ref={ref as any}
        className={cn(
          'flex w-full gap-2 rounded-xl bg-gray-800 px-4 py-2 ',
          className,
        )}
      >
        <MagnifyingGlassIcon className="fill-gray-muted h-6 shrink-0" />
        <input className="w-full bg-inherit text-sm font-light" {...others} />
        {children}
      </div>
    );
  },
);

export default SearchInput;
