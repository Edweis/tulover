import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
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
