import { ReactNode } from "react";
import { Link } from "react-router-dom";

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
              <Link to={paths.childrenNonProp}>children non prop</Link>
            </li>
            <li>
              <Link to={paths.childrenProp}>children as prop</Link>
            </li>
            <li>
              <Link to={paths.childrenPropMemoizedParent}>
                children as prop, memoized parent
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.content}>{children}</div>
    </div>
  );
}
