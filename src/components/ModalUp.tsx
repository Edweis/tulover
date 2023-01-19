import { PropsWithChildren, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
/* Close when the position of the modal is  */
const CLOSE_POSITION_SCREEN = 2 / 3;
const MARGIN_TOP_PX = 20;
const VELOCITY_BREAKPOINT = 700;
export default function SwipeUp(props: PropsWithChildren) {
  const screenHeight = window.screen.availHeight;
  console.log({ screenHeight });

  const [closing, setClosing] = useState(false);
  return (
    <motion.div
      initial={{ translateY: '100vh' }}
      animate={{ translateY: closing ? '100vh' : `${MARGIN_TOP_PX}px` }}
      drag="y"
      onDragEnd={(_e, info) => {
        const reachedBreakpoint =
          info.point.y > screenHeight * CLOSE_POSITION_SCREEN;
        const velocityReached = info.velocity.y > VELOCITY_BREAKPOINT;
        setClosing(reachedBreakpoint || velocityReached);
      }}
      dragElastic={0.2}
      dragSnapToOrigin
      dragConstraints={{ top: -MARGIN_TOP_PX, bottom: screenHeight - 100 }}
      dragTransition={{ power: 0.1, timeConstant: 100 }}
      className={cn('fixed inset-0 bg-red-500 z-20')}
      style={{ height: '200vh' }}
    >
      {props.children}
    </motion.div>
  );
}
