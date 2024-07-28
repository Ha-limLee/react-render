import Child from "../components/child";
import Parent from "../components/parent";
import style from "./root.module.css";

export default function ChildrenProp(): React.JSX.Element {
  return (
    <div className={style.root}>
      <Parent>
        <Child />
      </Parent>
    </div>
  );
}
