import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Funds from './Funds.js';

export default function Accounts() {
  const direction = window.history.state.usr.direction || 1;
  return (
    <motion.div
      className="grid gap-8"
      initial={{ x: direction * window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: direction * window.innerWidth }}
      transition={{ type: 'linear' }}
    >
      <Funds />
      <Funds />
      <Funds />
      <Outlet />
    </motion.div>
  );
}
