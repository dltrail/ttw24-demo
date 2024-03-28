import { ReactElement } from "react"
import cn from "classnames";
import styles from "./styles/TwoColumnBlock.module.scss";

type TwoColumnBlock = {
    col1: string
    col2: string
    className?: string
}

export function TwoColumnBlock({col1, col2, className}:TwoColumnBlock) {
  return (
    // #TODO: add classname detail to docs 
    <div className={cn(`${className? className: ""}`,`${styles.twoColumnBlock}`
      )}><p>{col1}</p>
        <p>{col2}</p>
    </div>
  )
}
