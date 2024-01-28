import { ReactNode } from "react";

interface PropsInput{
    children: ReactNode,
    title:string
}

export function Input({children, title}:PropsInput) {
  return (
      <div className="flex  truncate items-center gap-2 justify-center  p-2 rounded-lg cursor-pointer hover:bg-[#e2e2e2] transition  ">
        <p>{title}</p>
        {children}
      </div>
  );
}
