import { PropsWithChildren, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';

/* Close when the position of the modal is on the lower part of the screen  */
const CLOSE_POSITION_SCREEN = 2 / 3;
const MARGIN_TOP_PX = 20;
const VELOCITY_BREAKPOINT = 700;

export default function ModalUp(props: PropsWithChildren) {
  const navigate = useNavigate();
  const screenHeight = window.screen.availHeight;
  const [closing, setClosing] = useState(false);
  return (
    <motion.div
      initial={{ translateY: `${screenHeight}px` }}
      animate={{
        translateY: closing ? `${screenHeight}px` : `${MARGIN_TOP_PX}px`,
      }}
      drag="y"
      transition={{ type: 'spring', damping: 100, stiffness: 1000 }}
      onDragEnd={(_e, info) => {
        const reachedBreakpoint =
          info.point.y > screenHeight * CLOSE_POSITION_SCREEN;
        const velocityReached = info.velocity.y > VELOCITY_BREAKPOINT;
        setClosing(reachedBreakpoint || velocityReached);
        setTimeout(() => navigate(-1), 200);
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

// WITH
// height: 200vh;
// transform: translateX(0px) translateY(0px) translateY(90px) translateZ(0px);
//  user-select: none;
//  touch-action: pan-x;

// height: 200vh;
// transform: translateY(90vh) translateZ(0px);
// user-select: none;
// touch-action: pan-x;
