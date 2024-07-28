import React from "react";
import ParentMemoized from "../components/parent-memoized";
import Child from "../components/child";

import style from "./root.module.css";

export default function ChildrenPropMemoizedParent(): React.JSX.Element {
  return (
    <div className={style.root}>
      <ParentMemoized>
        <Child />
      </ParentMemoized>
    </div>
  );
}
