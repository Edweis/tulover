import { forwardRef } from 'react';
import cn from 'classnames';
import { Link, LinkProps } from 'react-router-dom';

type ExtraProps = { variant?: keyof typeof STYLES };

const STYLES = {
  primary: 'bg-blue-500 text-white',
  secondary: 'text-blue-500 bg-blue-900 active:bg-blue-800',
};
const Button = forwardRef<
  unknown,
  ExtraProps & React.HTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { className, children, variant, ...others } = props;
  return (
    <button
      ref={ref as any}
      className={cn(
        'gap-1 flex items-center rounded-xl px-5  h-10',
        STYLES[variant || 'secondary'],
        className,
      )}
      {...others}
    >
      {children}
    </button>
  );
});

export const ButtonAnchor = forwardRef<unknown, ExtraProps & LinkProps>(
  (props, ref) => {
    const { className, children, variant, ...others } = props;
    return (
      <Link
        ref={ref as any}
        className={cn(
          'gap-1 flex items-center rounded-xl px-5  h-10',
          STYLES[variant || 'secondary'],
          className,
        )}
        {...others}
      >
        {children}
      </Link>
    );
  },
);

export default Button;
