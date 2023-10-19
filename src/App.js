import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import { useEffect,useContext } from 'react'

import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import SignUp from './Pages/Signup'
import LoginPage from './Pages/Login';
import  Create  from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/postContext'

function App() {

  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{setUser(user)})
    

  })

  return (
    <div>
      <Post>

    
      <Router>
        <Route exact path='/'>
           <Home />
        </Route>

        <Route path='/SignUp'>
           <SignUp />
        </Route>

        <Route path='/login'>
           <LoginPage />
        </Route>

        <Route path='/create'>
           <Create />
        </Route>

        <Route path='/view'>
           <ViewPost />
        </Route>


        
        </Router>

      </Post>
     
    </div>
  );
}

export default App;
