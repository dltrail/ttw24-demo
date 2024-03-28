
import styles from "./container.module.scss";

type ContainerProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({children}:ContainerProps) {
  return (
      <div  className={styles.container}>
        {children}
      </div>
  );
}