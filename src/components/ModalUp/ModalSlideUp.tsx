import { PropsWithChildren } from 'react';
import ModalUp from './index.js';

export default function ModalSlideUp(props: PropsWithChildren) {
  return (
    <ModalUp
      className="rounded-t-2xl bg-gray-300 pt-6 focus:outline-none"
      marginTopPx={(window.screen.availHeight * 1) / 3}
    >
      <hr className="border-t-gray-muted  absolute top-0 left-1/2 mt-3 w-1/4 -translate-x-1/2 rounded-md border-t-4 border-transparent" />
      {props.children}
    </ModalUp>
  );
}
