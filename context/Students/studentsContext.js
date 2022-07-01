import React,{useReducer} from 'react';
export const StudentsContext = React.createContext();
const studentsReducer = (state,action)=>{
    switch (action.type) {
        case 'fetch':{
            state=[...action.payload]
        }
        case 'search':{
            state=[...action.payload]
        }
        case 'remove':{
            const newState = state.filter(student=>student.student_id!==action.id);
            state=[...newState];
        }
        
        default:
            return state;
            
    }
}
const StudentsContextProvider=(props)=>{
    const[studentsState,dispatch] = useReducer(studentsReducer,[]);
    
    return(
        <StudentsContext.Provider value={{studentsState,dispatch}}>
            {props.children}
        </StudentsContext.Provider>
    )
}
export default StudentsContextProvider;
