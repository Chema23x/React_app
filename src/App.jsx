import {Route, Routes} from 'react-router-dom';
import Navbar from	'./Components/Navbar.jsx'
import Main from './Components/Main.jsx'
import Astros from './Components/Astros.jsx'
import About from './Components/About.jsx'
import AppBar from './Components/AppBar.jsx'

import './App.css'

function App() {

    const linksData = [
      {name: 'Home', href: '/'},
      {name: 'About', href: '/about'},
      {name: 'Astros', href: '/astros'},
    ]

  return (
    <>
      <Navbar header='Navbar' links={linksData} />
      {//<AppBar />
      }
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
            path='/astros'
            element={<Astros />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Routes>  
      {//<Main />
      //<Astros />
       }
    </>
  )
}

export default App
