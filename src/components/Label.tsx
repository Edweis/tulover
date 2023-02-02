import cn from 'classnames';
import { forwardRef } from 'react';

type ExtraProps = { label: string };
const Label = forwardRef(
  (props: React.HTMLAttributes<HTMLDivElement> & ExtraProps, ref) => {
    const { label, children, ...otherProps } = props;
    return (
      <div ref={ref as any} {...otherProps}>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1">{children}</div>
      </div>
    );
  },
);
export default Label;
