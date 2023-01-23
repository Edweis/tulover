import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

/** When sliding over X we need to know top which direction we are supposed to go.
 * This is set in the menu by adding a history state containing {[TRANSITION_DIR]: 'left'|'right'|null}
 * The state is read when the trqansition happens.
 */
export const TRANSITION_DIR = 'dir';
type Dir = 'left' | 'right' | null;
const variants = {
  slideIn: { x: 0 },
  slideOut: () => {
    const dir: Dir = window.history.state.usr?.[TRANSITION_DIR];
    console.log('slideOut', { dir });
    if (dir === 'left') return { x: window.innerWidth };
    if (dir === 'right') return { x: -window.innerWidth };
    return { x: 0 };
  },
  before: () => {
    const dir: Dir = window.history.state.usr?.[TRANSITION_DIR];
    console.log('before', { dir });
    if (dir === 'left') return { x: -window.innerWidth };
    if (dir === 'right') return { x: window.innerWidth };
    return { x: 0 };
  },
};
function TranslateX(props: PropsWithChildren) {
  return (
    <motion.div
      onAnimationStart={() => {
        console.log('onAnimationStart TODOOO RESET window.history.state.usr');
      }}
      initial="before"
      animate="slideIn"
      exit="slideOut"
      // transition={{ duration: 5 }}
      transition={{ type: 'linear' }}
      variants={variants}
      className="absolute inset-x-0 px-4"
      data-x="TranslateX"
    >
      {props.children}
    </motion.div>
  );
}

export function wrapTranslateX(cmp: React.ReactNode, key: string) {
  return <TranslateX key={key}>{cmp}</TranslateX>;
}
