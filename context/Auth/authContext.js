import React,{useReducer} from 'react';
export const AuthContext = React.createContext();
const authReducer = (state,action)=>{
    switch (action.type) {
        case 'login':{
            const uerInfo ={
                username:action.payload,
                authenticated:true
            };
            localStorage.setItem('user',JSON.stringify(uerInfo))
            return{authenticated:true}
        }
            
        case 'logout':
        {
            localStorage.removeItem('user')
            break;
        }
           
    
        default:
            return state;
            
    }
}
const AuthContextProvider=(props)=>{
    const[authenticated,dispatch] = useReducer(authReducer,false);
    
    return(
        <AuthContext.Provider value={{authenticated,dispatch}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;
