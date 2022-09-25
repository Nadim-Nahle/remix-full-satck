import { useEffect, useState } from "react";

interface props {
  children: React.ReactNode;
  wrapperId: string;
}

const createWrapper = (wrapperId: string) => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", wrapperId);
  document.body.appendChild(wrapper);
  return wrapper;
};

export const Portal: React.FC<props> = ({chidlren, wrapperId}) => {
    const [wrapper, setWrapper] = useState<HTMLElement | null>(null);
    useEffect(()=>{
        let element = document.getElementById(wrapperId)
        let created = false;
        if (created && element?.parentNode){
            element.parentNode.removeChild(element)
        }
    },[wrapperId])

    if(wrapper == null)

    
}
