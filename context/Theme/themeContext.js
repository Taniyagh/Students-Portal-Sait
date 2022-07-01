import React,{useState} from 'react';
export const ThemeContext = React.createContext();
const ThemeContextProvider=(props)=>{
    const[lightTheme,setLightTheme] = useState(false);
    const[light] = useState({
        bg:'#000',
        syntax:'#fff'
    })
    const[dark] = useState({
        bg:'#fff',
        syntax:'#000'
    })
    const changeTheme=()=>{
        setLightTheme(!lightTheme)
    }
    return(
        <ThemeContext.Provider value={{lightTheme,light,dark,changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;
