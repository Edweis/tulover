import cn from 'classnames';
import { forwardRef } from 'react';

const Select = forwardRef(
  (props: React.HTMLAttributes<HTMLSelectElement>, ref) => {
    const { children, className, ...otherProps } = props;
    return (
      <select
        ref={ref as any}
        {...otherProps}
        className={cn(
          'focus:border-blue-500 focus-visible:outline-none  focus:ring-0',
          'w-full rounded-md bg-black placeholder:text-gray-muted border-gray-muted border py-1 px-2',
          className,
        )}
      >
        {children}
      </select>
    );
  },
);
export default Select;
