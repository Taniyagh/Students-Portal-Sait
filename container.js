import React,{useContext} from 'react';
import{ThemeContext} from '../src/context/Theme/themeContext';
const Container=(props)=>{
    const themeContext = useContext(ThemeContext);
  const {lightTheme,light,dark} = themeContext;
  const theme = lightTheme ?light:dark;
    return(
        <div className="App" style={{background:theme.bg,color:theme.syntax}}> 
            {props.children}
        </div>
    )
}
export default Container;