import { ReactNode } from "react";
import style from "./layout.module.css";

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
              <a href={`/children-prop`}>children prop</a>
            </li>
          </ul>
        </nav>
      </div>
      <div style={{ flexGrow: 1 }}>{children}</div>
    </div>
  );
}
