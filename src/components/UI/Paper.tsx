import { ReactNode } from "react";

export const Paper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`border p-4 rounded-md shadow-md bg-white ${className}`}>
      {children}
    </div>
  );
};
