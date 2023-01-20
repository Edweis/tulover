import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

/** When sliding over X we need to know top which direction we are supposed to go.
 * This is set in the menu by adding a history state containing {[TRANSITION_LEFT]: boolean}
 * The state is read when the trqansition happens.
 */
export const TRANSITION_LEFT = 'go-left';
const variants = {
  slideIn: { x: 0 },
  slideOut: () => {
    if (window.history.state.usr?.[TRANSITION_LEFT])
      return { x: window.innerWidth };
    return { x: -window.innerWidth };
  },
  before: () => {
    if (window.history.state.usr?.[TRANSITION_LEFT])
      return { x: -window.innerWidth };
    return { x: window.innerWidth };
  },
};
function TranslateX(props: PropsWithChildren) {
  return (
    <motion.div
      initial="before"
      animate="slideIn"
      exit="slideOut"
      transition={{ type: 'linear' }}
      variants={variants}
      className="absolute inset-x-0 px-4"
      data-x="TranslateX"
    >
      {props.children}
    </motion.div>
  );
}

export function wrapTranslateX(cmp: React.ReactNode) {
  return <TranslateX key={(cmp as any).type.name}>{cmp}</TranslateX>;
}
