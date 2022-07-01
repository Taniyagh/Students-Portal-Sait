import React,{Suspense,useContext} from 'react';
import './App.css';
import Toolbar from './containers/Header/Toolbar/Toolbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomePage from '../src/pages/Homepage';
import EditStudent from '../src/pages/EditStudent';
import AuthContextProvider from '../src/context/Auth/authContext';
import{ThemeContext} from '../src/context/Theme/themeContext';
import StudentsContextProvider from '../src/context/Students/studentsContext';
import Transition from './components/animation/transition';
import Animation from './components/animation/animation';

const AddStudent = React.lazy(()=>import('../src/pages/AddStudent')) ;
const App=() =>{
  const themeContext = useContext(ThemeContext);
  const {lightTheme,light,dark} = themeContext;
  const theme = lightTheme ?light:dark;
  return (
    <BrowserRouter>
      <AuthContextProvider >
          <StudentsContextProvider>          
            <div className="App" style={{background:theme.bg,color:theme.syntax}}> 
              <Toolbar />             
                <Routes>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/add-student" exact render={()=>(
                    <Suspense fallback={<p>...loading</p>}>
                      <AddStudent />
                    </Suspense>)} 
                  />
                  <Route path="/student/:studentid" exact component={EditStudent} />
                  <Route path="/transition" exact component={Transition} />
                  <Route path="/animation" exact component={Animation} />
                  <Route render={()=><h1>not Found</h1>} />
                </Routes>   
          </div>
        </StudentsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    
  );
}


export default App;
