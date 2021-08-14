import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddPonto from './pages/AddPonto'
import Pontos from './components/Pontos'

function App() {

  const [pontos, setPontos] = useState([])


  useEffect(() => {
    const getPontos = async () => {
      const pontosFromServer = await fetchPontos()
      setPontos(pontosFromServer)
    }
    getPontos()
  }, [])

  // Fetch Pontos 
  const fetchPontos = async () => {
    const res = await fetch('http://localhost:3003/pontos')
    const data = await res.json()

    return data
  }

  // Fetch Ponto
  const fetchPonto = async (id) => {
    const res = await fetch(`http://localhost:3003/pontos/${id}`)
    const data = await res.json()

    return data
  }

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
          <Route path='/' exact component={Home} />
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