import { forwardRef } from 'react';
import cn from 'classnames';

const Button = forwardRef<unknown, React.HTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { className, ...others } = props;
    return (
      <button
        ref={ref as any}
        className={cn(
          'text-blue-500 bg-blue-900 rounded-xl px-4 py-2 active:bg-blue-800',
          className,
        )}
        {...others}
      >
        {props.children}
      </button>
    );
  },
);

export default Button;
