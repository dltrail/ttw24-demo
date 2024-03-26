type ContainerProps = {
  children: JSX.Element | JSX.Element[]
}

export default function Layout({children}:ContainerProps) {
  return (
      <div className="container">
        {children}
      </div>
  );
}