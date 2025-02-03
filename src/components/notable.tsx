import { PropsWithChildren } from "react";

interface INotableProps extends PropsWithChildren {
  r: number
}

export const Notable: React.FC<INotableProps> = ({ children, r }) => {
  

  return (
    <span 
      style={{ transform: `rotate(${r}deg) scale(1.25)` }}
      className="font-display text-red-500 -z-10 relative inline-block"
    >
      {children}
    </span>
  )
}