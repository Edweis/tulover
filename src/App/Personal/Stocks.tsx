import { motion } from 'framer-motion';

export default function Stocks() {
  const direction = window.history.state.usr.direction || 1;

  return (
    <motion.div
      initial={{ x: direction * window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ x: direction * window.innerWidth }}
      transition={{ type: 'linear' }}
      className="grid gap-8"
    >
      Stocks
    </motion.div>
  );
}
