import {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';

/* Close when the position of the modal is on the lower part of the screen  */
const CLOSE_POSITION_SCREEN = 2 / 3;
const VELOCITY_BREAKPOINT = 700;

export default function ModalUp(
  props: PropsWithChildren<{
    className: string;
    withClose?: boolean;
    marginTopPx: number;
  }>,
) {
  const navigate = useNavigate();
  const { marginTopPx } = props;
  const screenHeight = window.screen.availHeight;
  const [closing, setClosing] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    /* For onBlur to work, we need to focus on the modal when it's mounted first */
    ref.current?.focus();
  }, []);
  useEffect(() => {
    if (!closing) return;
    /* We change the navigation once the animation is over */
    setTimeout(() => navigate(-1), 300);
  }, [closing]);
  return (
    <motion.div
      ref={ref}
      tabIndex={-1}
      onBlur={() => setClosing(true)}
      initial={{ translateY: `${screenHeight}px` }}
      animate={{
        translateY: closing ? `${1.1 * screenHeight}px` : `${marginTopPx}px`,
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
      dragConstraints={{ top: -marginTopPx, bottom: screenHeight - 100 }}
      dragTransition={{ power: 0.1, timeConstant: 100 }}
      className={cn(
        'max-w-[640px] mx-auto fixed inset-0 z-20 focus-visible:border-0',
        props.className,
      )}
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
