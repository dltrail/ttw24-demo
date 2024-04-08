import { ReactElement } from "react"
import cn from "classnames";
import styles from "./twoColumnBlock.module.scss"

type TwoColumnBlockProps = {
  // content: Content
   col1: string
  col2: string
  className?: string | undefined
}

export function TwoColumnBlock({ col1, col2, className }: TwoColumnBlockProps) {
  return (
    <div className={cn(`${className ? className : ""}`, `${styles.twoColumnBlock}`)}>
      <p>{col1}</p>
      <p>{col2}</p>
    </div>
  )
}

