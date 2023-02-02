import { Outlet } from 'react-router-dom';
import { KycData } from './context.js';

export default function Layout(props: {
  kyc: Partial<KycData>;
  steps: number;
}) {
  const count = Object.values(props.kyc).filter((k) => k != null).length;
  const percentage = ((count + 1) / (props.steps + 1)) * 100;
  return (
    <div className="grid gap-4 pt-2">
      <div className="h-2 rounded-full bg-blue-900">
        <div
          className="h-2 rounded-full bg-blue-500 transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
      <Outlet />
    </div>
  );
}
