import { forwardRef, HTMLAttributes } from 'react';
import cn from 'classnames';

const Card = forwardRef<
  unknown,
  Omit<HTMLAttributes<HTMLDivElement>, 'className'>
>((props, ref) => {
  const { children, ...others } = props;

  return (
    <div
      ref={ref as any}
      className="grid gap-6 rounded-xl bg-gray-800 p-4"
      {...others}
    >
      {children}
    </div>
  );
});

export default Card;
