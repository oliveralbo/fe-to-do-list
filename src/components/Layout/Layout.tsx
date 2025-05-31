interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className="p-4 flex flex-col items-center">{children}</div>;
};
