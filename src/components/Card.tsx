import { forwardRef, HTMLAttributes } from 'react';
import cn from 'classnames';

const Card = forwardRef<unknown, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { children, className, ...others } = props;

    return (
      <div
        ref={ref as any}
        className={cn('grid gap-6 rounded-xl bg-gray-500 p-4', className)}
        {...others}
      >
        {children}
      </div>
    );
  },
);

export default Card;
