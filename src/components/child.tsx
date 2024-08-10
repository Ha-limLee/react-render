import { useState } from "react";
import useColorTransition from "../hooks/use-color-transition";
import style from "./child.module.css";

export default function Child(): React.JSX.Element {
  const [count, setCount] = useState(0);

  const [el, setEl] = useState<HTMLDivElement | null>(null);
  useColorTransition(el);

  return (
    <div
      ref={(node) => {
        if (node) setEl(node);
      }}
      className={style.root}
      onClick={(e) => {
        e.stopPropagation();
        setCount(count + 1);
      }}
    >
      <p>{`child: ${count}`}</p>
    </div>
  );
}
