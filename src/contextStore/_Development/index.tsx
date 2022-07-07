import { createContext, FC, ReactNode, useContext } from "react";

interface DevProviderInterface {
    children?: ReactNode
}

interface ContextInterface {

}

const DevContext = createContext<ContextInterface>({

})

export const useDev = () => useContext(DevContext)

export const DevProvider: FC<DevProviderInterface> = ({ children }) => {
    return (
        <DevContext.Provider value={{

        }}>
            {children}
        </DevContext.Provider>
    )
}