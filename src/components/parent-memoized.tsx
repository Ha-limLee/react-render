import { memo, ReactNode, useState } from "react";
import useColorTransition from "../hooks/use-color-transition";
import style from "./parent.module.css";

type Props = {
  children: ReactNode;
};

function Parent({ children }: Props): React.JSX.Element {
  const [count, setCount] = useState(0);
  const [el, setEl] = useState<HTMLDivElement | null>(null);

  useColorTransition(el);

  return (
    <div
      ref={(node) => {
        if (node) setEl(node);
      }}
      className={`${style.root}`}
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <p>{`memoized parent: ${count}`}</p>

      <div>{children}</div>
    </div>
  );
}

const ParentMemoized = memo(Parent);

export default ParentMemoized;
