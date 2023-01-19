import { PropsWithChildren } from 'react';
import ModalUp from './index.js';

export default function ModalUpFull(props: PropsWithChildren) {
  return (
    <ModalUp className="rounded-t-2xl bg-gray-300" withClose>
      {props.children}
    </ModalUp>
  );
}
