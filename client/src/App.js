import './App.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from "./Login";
import NewBean from "./NewBean";
import MainContainer from './MainContainer';
import ChangeAccount from './ChangeAccount';
import SingleBean from './SingleBean';


function App() {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [myBeans, setMyBeans] = useState([])
  const [beans, setBeans] = useState ([])
  


  useEffect(() =>{
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  useEffect(() => {
    fetch("/beans")
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then(data => setBeans(data))
}, [])

function addNewBean(newBean) {
  const updatedBeanArray = [...beans, newBean];
  setBeans(updatedBeanArray);
}



  // const mappedBeans = myBeans.map(bean=>{return bean})

  const save = (bean) => {
    if(!myBeans.includes(bean)){
      const newMyBeans = [...myBeans, bean]
      setMyBeans(newMyBeans)
    }
  }

  const remove = (bean) => {
    const newMyBeans = [...myBeans].filter(myBean=>bean.id !== myBean.id)
    setMyBeans(newMyBeans)
  }

  return (
    <div className="App">
      
      <BrowserRouter>
        <Route exact path = "/">
          <Login setUser={setUser} user={user}/>
        </Route>
        
        <Route exact path = "/new-bean">
          <NewBean user={user} addNewBean={addNewBean}/>
        </Route>

        <Route exact path = "/portfolio">
          <ChangeAccount user={user} setUser={setUser} email={email} setEmail={setEmail}/>
        </Route>

        <Route exact path = "/singlebean/:id">
          <SingleBean user={user} beans={beans} click={save} remove={remove}/>
        </Route>

        <Route exact path = "/home">
          <MainContainer setUser={setUser} user={user} beans={beans}/>
        </Route>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
