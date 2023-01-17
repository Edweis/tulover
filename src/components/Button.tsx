import { forwardRef } from 'react';
import cn from 'classnames';

const Button = forwardRef<unknown, React.HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { className, children, ...others } = props;
    return (
      <button
        ref={ref as any}
        className={cn(
          'gap-1 flex items-center text-blue-500 bg-blue-900 rounded-xl px-5 active:bg-blue-800 h-10',
          className,
        )}
        {...others}
      >
        {children}
      </button>
    );
  },
);

export default Button;
