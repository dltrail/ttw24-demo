import { ReactElement } from "react"
import cn from "classnames";
import styles from "./styles/TwoColumnBlock.module.scss";

type Content = {
  __typename: string
  col1: string
  col2: string
}

type TwoColumnBlock2Props = {
  content: Content
  className?: string | undefined
}

export function TwoColumnBlock2({ content, className }: TwoColumnBlock2Props) {
  const { __typename, col1, col2 } = content
  return (
    <div className={cn(`${className ? className : ""}`, `${styles.twoColumnBlock}`)}>
      <p>This is a {__typename}</p>
      <p>{col1}</p>
      <p>{col2}</p>
    </div>
  )
}

