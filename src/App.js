import logo from './logo.svg';
import './App.css';
// import Button from './components/Button'
// import Clock from './components/Clock'
// import Starwars from './components/Starwars';
// import People from './components/People';
// import List from './components/List'

// function App() {
//   return <Starwars/>
//   return <People/>

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Clock/>
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1>Belajar React</h1> q q  
  //       <Button name=" nugra" color="green"></Button>
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
// }

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link className='nav-title' to="/">Home</Link>
            </li>
            <li>
              <Link className='nav-title' to="/about">About</Link>
            </li>
            <li>
              <Link className='nav-title' to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" >
            <Route path='about1' element={<About1/>} />
            <Route path='about2' element={<About2/>} />
            <Route index element={<About/>} />
          </Route>
          <Route path="/users/:id" element={<UsersId />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <div>
    <h2>About</h2>
    <Link to="about1">about 1</Link>
    <Link to="about2">about 2</Link>
  </div>;
}


function About2() {
  return <div>
    <h2>About 2</h2>
    <Link to="/about/about1">about 1</Link>
    <Link to="/about/about2">about 2</Link>
  </div>;
}

function About1() {
  return <div>
    <h2>About 1</h2>
    <Link to="/about/about1">about 1</Link>
    <Link to="/about/about2">about 2</Link>
  </div>;
}


function Users() {
  return <ul>
    <li><Link to='1'>1</Link></li>
    <li><Link to='2'>2</Link></li>
    <li><Link to='3'>3</Link></li>
    <li><Link to='4'>4</Link></li>
    <li><Link to='5'>5</Link></li>
    <li><Link to='6'>6</Link></li>
    <li><Link to='7'>7</Link></li>
    <li><Link to='8'>8</Link></li>
    <li><Link to='9'>9</Link></li>
    <li><Link to='10'>10</Link></li>

  </ul>;
}

function UsersId() {
  let params = useParams()
  return <h2>{params.id}</h2>
}

export default App;

