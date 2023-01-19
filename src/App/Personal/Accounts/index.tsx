import { Outlet } from 'react-router-dom';
import ModalUp from '../../../components/ModalUp.js';
import Funds from './Funds.js';

export default function Accounts() {
  return (
    <div className="grid gap-8">
      <Funds />
      <Funds />
      <Funds />
      <Outlet />
    </div>
  );
}
