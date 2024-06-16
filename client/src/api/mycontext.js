import { createContext,useState } from 'react';

export const MyContext = createContext(null);

export const ContextProvider = (props) =>{
    const [name,setname] = useState("");
    return (
        <MyContext.Provider value={{name,setname}}>
            {props.children}
        </MyContext.Provider>
    )
}