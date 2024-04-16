import { ReactElement } from "react"
import cn from "classnames";
import styles from "./TwoColumnBlock.module.scss"

type TwoColumnBlockProps = {
  col1: string
  col2: string
  className?: string
}

export function TwoColumnBlock({ col1, col2, className }: TwoColumnBlockProps) {
  return (
    <div className={cn(`${className ? className : ""}`, `${styles.twoColumnBlock}`)}>
      <p>{col1}</p>
      <p>{col2}</p>
    </div>
  )
}

