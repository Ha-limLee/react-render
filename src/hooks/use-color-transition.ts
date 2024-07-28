import { useRef } from "react";
import style from "./use-color-transition.module.css";

export default function useColorTransition(el: HTMLElement | null): void {
  const originalClassName = useRef(el?.className);

  if (el) {
    if (!originalClassName.current) {
      originalClassName.current = el.className;
    }

    el.className = `${originalClassName.current} ${style.after}`;
    setTimeout(() => {
      el.className = `${originalClassName.current} ${style.default}`;
    }, 0);
  }
}
