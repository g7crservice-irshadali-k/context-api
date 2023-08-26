import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppContext } from './context/AppContext';
import Child1 from './components/Child1';
import Child2 from './components/Child2';

function App() {

  const user2 = useContext(AppContext);
  const [name, setName] = useState<string>(user2.name)
  const [age, setAge] = useState<number>(user2.age)

  const ChangeName = () => {
    setName('name changed from App')
    user2.setName('name changed from App')
  }


  return (
    <AppContext.Provider value={{ name, age, setName }}>
      <div className="App">
        <h1>App</h1>
        <span>{name}</span>
        <button onClick={ChangeName}>Change from App</button>

        <hr></hr>
        <Child1 />
        <Child2 />
      </div>
    </AppContext.Provider>
  );
}

export default App;
