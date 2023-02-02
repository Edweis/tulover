import cn from 'classnames';
import { forwardRef } from 'react';

const InputText = forwardRef(
  (props: React.HTMLAttributes<HTMLInputElement>, ref) => {
    const { className, ...otherProps } = props;
    return (
      <input
        ref={ref as any}
        {...otherProps}
        className={cn(
          'focus-visible:border-blue-500  focus-visible:outline-none',
          'w-full rounded-md bg-black placeholder:text-gray-muted border-gray-muted border py-1 px-2',
          className,
        )}
      />
    );
  },
);
export default InputText;
