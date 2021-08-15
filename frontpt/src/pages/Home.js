import { useEffect, useState } from 'react'
import Pontos from '../components/Pontos'
import Pagination from '../components/Pagination'

function Home() {
  const [pontos, setPontos] = useState([])
  const [busca, setBusca] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pointsPerPage] = useState(10)

  useEffect(() => {
    const getPontos = async () => {
      const pontosFromServer = await fetchPontos()
      setPontos(pontosFromServer)
      setBusca(pontosFromServer)
    }
    getPontos()
  }, [])

  const fetchPontos = async () => {
    const res = await fetch('http://localhost:3003/pontos')
    const data = await res.json()
    return data
  }

  //Get current posts
  const indexOfLastPoint = currentPage * pointsPerPage
  const indexOfFirstPoint = indexOfLastPoint - pointsPerPage
  const currentPoints = pontos.slice(indexOfFirstPoint, indexOfLastPoint)

  //Change page
  const paginate = pageNumber => setCurrentPage(pageNumber)
  
  return (
    <div className='container'>

      <div className='form-control'>
        <label>Digite um ponto turístico que deseja procura</label>                  
        <input
            type='text'
            placeholder='Escreva o nome, localização do lugar desejado'
            value={busca}
            onChange={(e) => setBusca(e.target.value)} />
      </div>

      <Pontos pontos={currentPoints}/>
      <Pagination pointsPerPage={pointsPerPage} totalPoints={pontos.length} paginate={paginate} />
    </div>
  );
}

export default Home;