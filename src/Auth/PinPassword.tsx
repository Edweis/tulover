import { useState } from "react";
import cn from "classnames";
import { BackSpace } from "@heroicons/react";
function KeyBoard() {
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const blockStyle = "p-5 text-3xl";
  return (
    <div className="grid grid-cols-3 w-full text-center">
      {options.map((n) => (
        <div key={n} className={blockStyle}>
          {n}
        </div>
      ))}
      <div className={blockStyle} />
      <div className={blockStyle}>0</div>
      <div className={blockStyle}>
        <BackSpace />
      </div>
    </div>
  );
}

export default function PinPassword() {
  const [pass, setPass] = useState("");
  return (
    <div>
      <div className="flex items-center flex-col">
        <div className="rounded-full bg-gray-500 h-8 w-8 flex items-center justify-center">
          FR
        </div>
        <div>Welcome back, François</div>
        <div className="flex gap-8">
          {[0, 1, 2, 3].map((i) => (
            <div
              className={cn(
                "h-3 w-3 rounded-full",
                pass.length > i ? "bg-blue-500" : "bg-gray-400"
              )}
              key={i}
            />
          ))}
        </div>
        <KeyBoard />
      </div>
    </div>
  );
}
