'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MyContextProps {
    openNav: boolean;
    updateValue: (newValue: boolean) => void;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

interface MyContextProviderProps {
    children: ReactNode;
}

const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [openNav, setOpenNav] = useState(true);

    const updateValue = (newValue: boolean) => {
        setOpenNav(newValue);
    };

    return (
        <MyContext.Provider value={{ openNav, updateValue }}>
            {children}
        </MyContext.Provider>
    );
};

const useMyContext = (): MyContextProps => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};

export { MyContextProvider, useMyContext };
