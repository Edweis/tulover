import { PropsWithChildren, useCallback, useEffect, useState } from "react";
import cn from "classnames";
import { BackspaceIcon, FingerPrintIcon } from "@heroicons/react/24/solid";
import useLoading from "../lib/use-loading.js";
function KeyBoard(props: {
  hasStarted: boolean;
  loading: boolean;
  onClick: (value: number | null) => void;
}) {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const Block = useCallback(
    ({ children, value }: PropsWithChildren<{ value: number | null }>) => (
      <div className="p-5 text-3xl" onClick={() => props.onClick(value)}>
        {children}
      </div>
    ),
    []
  );
  return (
    <div className="grid grid-cols-3 w-full text-center ">
      {options.map((n) => (
        <Block value={n} key={n}>
          {n}
        </Block>
      ))}
      <Block value={null} />
      <Block value={0}>0</Block>
      <Block value={null}>
        {props.hasStarted && <BackspaceIcon className="h-6 inline" />}
        {!props.hasStarted && <FingerPrintIcon className="h-6 inline" />}
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
            "h-3 w-3 rounded-full",
            props.length > i ? "bg-blue-500" : "bg-gray-400"
          )}
          style={{
            animation: props.loading
              ? "1s cubic-bezier(0.4, 0, 0.6, 1) " +
                i * 300 +
                "ms infinite normal none running pulse"
              : "",
          }}
          key={i}
        />
      ))}
    </div>
  );
}

export default function PinPassword(props: { onSuccess: () => void }) {
  const [pass, setPass] = useState("");
  const [loading, signIn] = useLoading(async () =>
    new Promise((res) => setTimeout(res, 2000)).then(() => setPass(""))
  );
  useEffect(() => {
    if (pass.length === 4) signIn();
  }, [pass.length]);
  console.log({ pass, loading });
  return (
    <div className="flex items-center flex-col min-h-screen justify-between py-8">
      <div className="rounded-full bg-gray-500 h-14 w-14 flex items-center justify-center">
        FR
      </div>
      <div className="text-xl">Welcome back, François</div>
      <Status length={pass.length} loading={loading} />
      <KeyBoard
        loading={loading}
        hasStarted={pass.length > 0}
        onClick={(value) =>
          setPass((p) =>
            value == null ? p.slice(0, -1) : (p + value).slice(0, 4)
          )
        }
      />
      <p className="text-blue-500">Forgot your passcode?</p>
    </div>
  );
}
