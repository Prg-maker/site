import { ReactNode } from "react";

interface PropsInput{
    children: ReactNode,
    title:string
}

export function Inputs({children, title}:PropsInput) {
  return (
      <a href="" className="flex items-center gap-6 justify-start px-4  p-2 rounded-lg cursor-pointer  hover:bg-[#D0D0D0] transition  ">
        {children}
        <p className="">{title}</p>
      </a>
  );
}
