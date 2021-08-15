import { useEffect, useState } from 'react'
import Pontos from '../components/Pontos'

function Home() {
  const [pontos, setPontos] = useState([])

  useEffect(() => {
    const getPontos = async () => {
      const pontosFromServer = await fetchPontos()
      setPontos(pontosFromServer)
    }
    getPontos()
  }, [])

  const fetchPontos = async () => {
    const res = await fetch('http://localhost:3003/pontos')
    const data = await res.json()

    return data
  }

  return (
    <div className='container'>
      <Pontos pontos={pontos}></Pontos>
    </div>
  );
}

export default Home;