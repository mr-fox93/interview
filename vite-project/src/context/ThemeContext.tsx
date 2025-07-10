import {createContext, useContext, useState, useEffect, useMemo, useCallback, type ReactNode} from 'react'

interface ThemeProps {
    mode: boolean;
    toggle: ()=> void;
}

const ThemeContext = createContext<ThemeProps | undefined>(undefined)

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [mode, setMode] = useState<boolean>(false) 

    useEffect(() => {
        document.documentElement.classList.toggle('dark', mode)
    }, [mode])
    
    const toggle = useCallback(() => {
        setMode(prev => !prev)
    }, [])

    const value = useMemo(() => ({ mode, toggle }), [mode, toggle])

    console.log('🎨Component re-rendered')
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}