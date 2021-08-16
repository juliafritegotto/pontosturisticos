import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddPonto from './pages/AddPonto'

function App() {

  const [pontos, setPontos] = useState([]) 

  const addPonto = async (ponto) => {
    const res = await fetch(`http://localhost:3003/pontos`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(ponto)
    })

    const data = await res.json()
    setPontos([...pontos, data])
  }




  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact render={()=>(<Home term='search'        
          />)}/>
          <Route path='/pontos' render={() => (
            <>
              <AddPonto onAdd={addPonto} />
            </>

          )} />
        </Switch>
      </Router>
    </>
  );
}

export default App;