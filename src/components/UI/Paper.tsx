import { ReactNode } from "react";

export const Paper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white">{children}</div>
  );
};
