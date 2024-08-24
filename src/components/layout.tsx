import { ReactNode } from "react";
import style from "./layout.module.css";

import * as paths from "../consts/path";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props): React.JSX.Element {
  return (
    <div className={style.root}>
      <div className={style["side-bar"]}>
        <nav style={{ paddingRight: "20px" }}>
          <ul>
            <li>
              <a href={paths.childrenNonProp}>children non prop</a>
            </li>
            <li>
              <a href={paths.childrenProp}>children as prop</a>
            </li>
            <li>
              <a href={paths.childrenPropMemoizedParent}>
                children as prop, memoized parent
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.content}>{children}</div>
    </div>
  );
}
