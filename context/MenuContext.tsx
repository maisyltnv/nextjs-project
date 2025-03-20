'use client'
import { createContext, useState } from "react";

export const MenuContext = createContext({
    open: false,
    toggle: () => {}
  });

  const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        console.log("toggle");
        setOpen((prev) => !prev);
    };

    return (
        <MenuContext.Provider value={{ open, toggle }}>
            {children} {/* Ensure children are rendered */}
        </MenuContext.Provider>
    );
};

export default MenuContextProvider;
