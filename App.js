import React,{Suspense,useContext} from 'react';
import './App.css';
import Toolbar from './containers/Header/Toolbar/Toolbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from '../src/pages/Homepage';
import EditStudent from '../src/pages/EditStudent';
import AuthContextProvider from '../src/context/Auth/authContext';

import ThemeContextProvider from '../src/context/Theme/themeContext';
import StudentsContextProvider from '../src/context/Students/studentsContext';
import Transition from './components/animation/transition';
import Animation from './components/animation/animation';
import Mixtransition from './components/animation/mixtransition';
import MixAnimation from './components/animation/mixcssanimation';
import Container from './container';
const AddStudent = React.lazy(()=>import('../src/pages/AddStudent')) ;
const App=() =>{
  
  return (
    <ThemeContextProvider>
      <AuthContextProvider >
          <StudentsContextProvider>          
           <Container>
              <Toolbar />
              
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/add-student" exact render={()=>(
                    <Suspense fallback={<p>...loading</p>}>
                      <AddStudent />
                    </Suspense>)} 
                  />
                  <Route path="/student/:studentid" exact component={EditStudent} />
                  <Route path="/transition" exact component={Transition} />
                  <Route path="/animation" exact component={Animation} />
                  <Route path="/reactjs+csstransition" exact component={Mixtransition} />
                  <Route path="/reactjs+cssanimation" exact component={MixAnimation} />
                  <Route render={()=><h1>not Found</h1>} />
                </Switch>
                
                
              
              
                </Container>
        </StudentsContextProvider>
      </AuthContextProvider>
      </ThemeContextProvider>
    
    
  );
}


export default App;
