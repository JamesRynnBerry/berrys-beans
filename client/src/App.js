import './App.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from "./Login";
import NewBean from "./NewBean";
import MainContainer from './MainContainer';
import ChangeAccount from './ChangeAccount';


function App() {
  const [user, setUser] = useState("");
  
  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let url = "http://localhost:3000/me";
  //     let config = {};
  //     const response = await
  //     fetchMyAPI(url)
  //     console.log(response)
  //   }

  //   fetchMyAPI();
  // }, []); 

  // if(!user) {
  //   fetch("http://localhost:3000/me")
  //   .then(response => response.json)
  //   .then(response => {setUser(response.text);
  //   });
  // }

  // I want the fetch to initiate on a user state change (line 23). 
  useEffect(() =>{
    fetch("http://localhost:3000/me")
    .then((r) => {
      if (!r) {
        r.json().then((user) => console.log("butts", user));
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/">
          <Login setUser={setUser} user={user}/>
        </Route>
        <Route exact path = "/home">
          <MainContainer setUser={setUser} user={user}/>
        </Route>
        <Route exact path = "/new-bean">
          <NewBean user={user}/>
        </Route>
        <Route exact path = "/portfolio">
          <ChangeAccount user={user} setUser={setUser}/>
        </Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
