import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';

/* Close when the position of the modal is on the lower part of the screen  */
const CLOSE_POSITION_SCREEN = 2 / 3;
const MARGIN_TOP_PX = 20;
const VELOCITY_BREAKPOINT = 700;

export default function ModalUp(
  props: PropsWithChildren<{ className: string; withClose?: boolean }>,
) {
  const navigate = useNavigate();
  const screenHeight = window.screen.availHeight;
  const [closing, setClosing] = useState(false);
  useEffect(() => {
    if (!closing) return;
    setTimeout(() => navigate(-1), 300);
  }, [closing]);
  return (
    <motion.div
      initial={{ translateY: `${screenHeight}px` }}
      animate={{
        translateY: closing ? `${1.1 * screenHeight}px` : `${MARGIN_TOP_PX}px`,
      }}
      drag="y"
      transition={{ type: 'spring', damping: 100, stiffness: 1000 }}
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
      className={cn('fixed inset-0 z-20', props.className)}
      style={{ height: '200vh' }}
    >
      {props.withClose && (
        <div>
          <button onClick={() => setClosing(true)}>
            <XMarkIcon className="h-12 pt-4 pl-4" />
          </button>
        </div>
      )}
      <div className="px-4">{props.children}</div>
    </motion.div>
  );
}
