import { Outlet } from 'react-router-dom';
import { KycData } from './context.js';

export default function Layout(props: {
  kyc: Partial<KycData>;
  steps: number;
}) {
  const count = Object.values(props.kyc).filter((k) => k != null).length;
  return (
    <div className="z-40">
      <div className="mb-4 flex flex-col gap-4">
        Steps {count + 1}/{props.steps}
      </div>
      <Outlet />
    </div>
  );
}
