import { Outlet } from 'react-router-dom';
import Funds from './Funds.js';

export default function Accounts() {
  return (
    <div className="grid gap-8">
      <Funds />
      <Outlet />
    </div>
  );
}
