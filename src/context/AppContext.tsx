import React, { SetStateAction, createContext } from "react";

export const AppContext = createContext<{ name: string, age: number, setName: React.Dispatch<SetStateAction<string>> }>(
    {
        name: 'I',
        age: 1,
        setName: () => { }
    }
)