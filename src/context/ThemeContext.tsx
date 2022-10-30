import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({} as any)

interface ProviderProps {
    children: JSX.Element
}

export const ThemeContextProvider = ({ children }: ProviderProps) => {
    const [contextTheme, setContextTheme] = useState('Dark')
    const values = { contextTheme, setContextTheme }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    return context
}