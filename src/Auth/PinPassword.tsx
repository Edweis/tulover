import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import { BackspaceIcon, FingerPrintIcon } from '@heroicons/react/24/solid';
import useLoading from '../lib/use-loading.js';

function KeyBoard(props: {
  hasStarted: boolean;
  onClick: (value: number | null) => void;
}) {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const Block = useCallback(
    ({ children, value }: PropsWithChildren<{ value: number | null }>) => (
      <div
        className="p-5 text-3xl"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Blocked Clicked !', e);
          props.onClick(value);
        }}
      >
        {children}
      </div>
    ),
    [],
  );
  return (
    <div className={'grid w-full select-none grid-cols-3 text-center'}>
      {options.map((n) => (
        <Block value={n} key={n}>
          {n}
        </Block>
      ))}
      <Block value={null} />
      <Block value={0}>0</Block>
      <Block value={null}>
        {props.hasStarted && <BackspaceIcon className="inline h-6" />}
        {!props.hasStarted && <FingerPrintIcon className="inline h-6" />}
      </Block>
    </div>
  );
}

function Status(props: { length: number; loading: boolean }) {
  return (
    <div className="flex gap-8">
      {[0, 1, 2, 3].map((i) => (
        <div
          className={cn(
            'h-3 w-3 rounded-full',
            props.length > i ? 'bg-blue-500' : 'bg-gray-400',
          )}
          style={{
            animation: props.loading
              ? `1s cubic-bezier(0.4, 0, 0.6, 1) ${
                  i * 300
                }ms infinite normal none running pulse`
              : '',
          }}
          key={i}
        />
      ))}
    </div>
  );
}

export default function PinPassword(props: { onSuccess: () => void }) {
  const [pass, setPass] = useState('');
  const [loading, signIn] = useLoading(async () => {
    // eslint-disable-next-line no-promise-executor-return
    await new Promise((res) => setTimeout(res, 2000));
    if (pass === '2558') props.onSuccess();
    setPass('');
  });
  useEffect(() => {
    if (pass.length === 4) signIn();
  }, [pass.length]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-300">
        FR
      </div>
      <div className="text-xl">Welcome back, François</div>
      <Status length={pass.length} loading={loading} />
      <KeyBoard
        hasStarted={pass.length > 0}
        onClick={(value) => {
          if (loading) return;
          setPass((p) => (value == null ? p.slice(0, -1) : p + value));
        }}
      />
      <p className="text-blue-500">Forgot your passcode?</p>
    </div>
  );
}
