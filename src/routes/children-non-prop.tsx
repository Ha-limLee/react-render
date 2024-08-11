import ParentHasChild from "../components/parent-has-child";
import style from "./root.module.css";

export default function ChildrenNonProp(): React.JSX.Element {
  return (
    <div className={style.root}>
      <ParentHasChild />
    </div>
  );
}
