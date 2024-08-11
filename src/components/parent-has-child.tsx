import { useRef, useState } from "react";
import style from "./parent.module.css";
import Child from "./child";
import useColorTransition from "../hooks/use-color-transition";

export default function ParentHasChild(): React.JSX.Element {
  const [count, setCount] = useState(0);

  const parentRef = useRef<HTMLDivElement>(null);

  useColorTransition(parentRef.current);

  return (
    <div
      ref={parentRef}
      className={style.root}
      onClick={() => setCount(count + 1)}
    >
      <p>parent: {count}</p>
      <Child />
    </div>
  );
}
