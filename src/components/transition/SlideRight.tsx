import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

export default function SlideRight(
  props: PropsWithChildren<{ title?: string }>,
) {
  return (
    <motion.div
      className="fixed inset-0 z-10 flex flex-col gap-4 overflow-y-scroll  bg-black "
      initial={{ translateX: '100%' }}
      animate={{ translateX: 0 }}
      exit={{ translateX: '100%' }}
      transition={{ type: 'easeIn' }}
    >
      <div className="sticky top-0  flex  bg-black/50 backdrop-blur-md">
        <Link to=".." className="absolute py-3 pl-4">
          <ArrowLeftIcon className="h-6 " />
        </Link>
        <div className="h-12 w-full pt-3 text-center">{props.title}</div>
      </div>
      <div className="grid gap-4 p-4">{props.children}</div>
    </motion.div>
  );
}
