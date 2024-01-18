Header.js

import React from 'react'

const Header = () => {
    
  return (
    <header>
        <h1>to do list</h1>
    </header>
  )
}

export default Header


Content.js

import React from 'react'

const Content = () => {

    function changename(){
        const names=["create","learn","Do something"];
        const int=Math.floor(Math.random()*3);
        return names[int]
      }
    const handleclick=(e)=>{
      console.log(e)
    }
    const handleclick2=(name)=>{
      console.log(`Take ur challenge ${name}`)
    }
  return (
    <main>
    <p>Lets {changename()} good </p>
    <button onClick={(e) => handleclick(e)}>Challenge</button>
    <button onClick={() => handleclick2('prabha')}>Challenge</button>
    </main>
  )
}

export default Content

Footer.js

import React from 'react'

const Footer = () => {
    const year= new Date();
  return (
    <footer>Copyright &copy; {year.getFullYear()}</footer>
  )
}

export default Footer


index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


App.js

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";


function App(){
  
  return(
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
export default App;

useState :
Content.js
import React from 'react'
import { useState } from 'react';

const Content = () => {
  
    function changename(){
        const names=["create","learn","Do something"];
        const int=Math.floor(Math.random()*3);
        return names[int]
      }

      function namee(){
        console.log('Hi hello welcome')
      }
    
      const [count, setCount] = useState(99);
      const [name,setName] = useState(()=>namee());

      function incrementFunc(){
        setCount((prevCount) => {return prevCount + 1});
      }
      function decrementFunc(){
        setCount((prevCount) => {return prevCount - 1});
      }

  return (
    <main>
    <p>Lets Earn good </p>
    <button>Challenge</button><br></br>
    <button onClick={decrementFunc}>-</button><br></br>
    <span>{count}</span><br></br>
    <button onClick={incrementFunc}>+</button><br></br>
    </main>
  )
}

export default Content


Content.js
import React from 'react'
import { useState } from 'react';

const Content = () => {
  
  const [name , setName]= useState("create");

    function changename(){
        const names=["create","learn","Do something"];
        const int=Math.floor(Math.random()*3);
        setName(names[int])
      }

      

  return (
    <main>
    <p>Lets {name} good </p>
    <button onClick={changename}>Challenge</button><br></br>
    
    </main>
  )
}

export default Content

List and Keys:
Content.js
import React from 'react'
import { useState } from 'react';

const Content = () => {
    const [items, setItems] = useState(
      [
        {id:1,
        checked : true,
        item : "Practice coding"
      },
      {id:1,
        checked : true,
        item : "Learn React"
      },
      {id:1,
        checked : true,
        item : "Play games"
      }

      ]);
      // const numbers = [-2,0,3,4,5];
      // const itemss = numbers.map(n=> ({number : n}))
      // const itemss= numbers.filter(n=> n>=0).map(n=>({number :n}))
      // console.log(itemss)
  return (
    <main>
      <ul>
        <li>
          {items.map((item) => (
            <li>
              <input 
              type=  "checkbox"
              checked= {item.checked}
              />
              <label>{item.item}</label>
              <button>Delete</button>
            </li>
          ))}
        </li>
      </ul>
    </main>
  )
}

export default Content
