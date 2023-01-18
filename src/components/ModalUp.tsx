import { PropsWithChildren, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
/* Close when the position of the modal is  */
const CLOSE_POSITION_SCREEN = 2 / 3;
const MARGIN_TOP_PX = 20;
const VELOCITY_BREAKPOINT = 300;
export default function SwipeUp(props: PropsWithChildren) {
  const screenHeight = window.screen.availHeight;
  console.log({ screenHeight });
  const [closing, setClosing] = useState(false);
  const [v, setV] = useState(0);
  return (
    <motion.div
      initial={{ translateY: '100vh' }}
      animate={{ translateY: `${MARGIN_TOP_PX}px` }}
      drag="y"
      onDrag={(_e, info) => {
        const reachedBreakpoint =
          info.point.y > screenHeight * CLOSE_POSITION_SCREEN;
        const velocityReached = info.velocity.y > VELOCITY_BREAKPOINT;
        setV(info.velocity.y);
        setClosing(reachedBreakpoint || velocityReached);
      }} // dragElastic={0}
      dragElastic={0.2}
      dragSnapToOrigin
      dragConstraints={{ top: -MARGIN_TOP_PX, bottom: screenHeight - 100 }}
      dragTransition={{
        power: 0.1,
        timeConstant: 100,
      }}
      // transition={{ type: 'inertia', velocity: 50 }}

      // animate={{ rotate: 180 }}
      // transition={{ type: 'inertia', velocity: 50 }}
      className={cn('fixed inset-0', closing ? 'bg-green-500' : 'bg-red-500')}
      style={{ height: '200vh' }}
    >
      {v.toFixed(0)}
      {props.children}
    </motion.div>
  );
}
