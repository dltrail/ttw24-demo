type ContainerProps = {
  children: JSX.Element | JSX.Element[]
  className?: string
}

export default function Layout({children, className}:ContainerProps) {
  return (
      <div className={className}>
        {children}
      </div>
  );
}