import './App.css';
import React from 'react';
import Detail from './de.js';
import './from.css'


/*import React,{useEffect,createContext,useReducer} from 'react';
import Navbar from './compontents/navbar';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
import Home from './compontents/screen/home';
import Profile from './compontents/screen/profile';
import SignIn from './compontents/screen/login';
import Signup from './compontents/screen/signup';
import Create from './compontents/screen/createpost'
import {reducer,initialState} from './reducer/userreducer'
 export const UserContext=createContext()

function Routing()
{
	const history=useHistory()
	useEffect(()=>{
		const user=JSON.parse(localStorage.getItem("user"))
		if(user)
		{
			history.push('/')
		}
		else{
			history.push('/signin')
		}


	},[])
	return(
		<Switch>
		<Route exact path="/">
<Home/>
</Route>
<Route path="/signin">
<SignIn/>
</Route>
<Route path="/signup">
<Signup/>
</Route>
<Route path="/profile">
<Profile/>
</Route>
<Route path="/create">
<Create/>
</Route>
</Switch>
		);
}
function App() {
	const[state,dispatch]=useReducer(reducer,initialState)
	console.log(state);
	//const v=state
	
  return(
  	<UserContext.Provider value={{state,dispatch}}>
  	
  	
  	<BrowserRouter>
<Navbar/>
<Routing/>

</BrowserRouter>
</UserContext.Provider>
);

}*/
function App() {
	return(
		<div className="App">
		<Detail/>
		</div>
		);
}

export default App;