import { useEffect, useState, useRef } from 'react'
import Pontos from './Pontos'
import Ponto from './Ponto'
import Pagination from './Pagination'

function Home({term}) {
  const [pontos, setPontos] = useState([])
  const [ponto, setPonto] = useState([])
  const [ search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pointsPerPage] = useState(10)
 
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

  //Get current posts
  const indexOfLastPoint = currentPage * pointsPerPage
  const indexOfFirstPoint = indexOfLastPoint - pointsPerPage
  const currentPoints = pontos.slice(indexOfFirstPoint, indexOfLastPoint)

    //Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber)      
  }
  
  const searchResults = (pontos)=> {
    return pontos.filter(ponto =>ponto.nome.toLowerCase().indexOf(search) > -1)
  }  

  return (
    <div className='container'>

      <div className='form-control'>

        <label>Digite um ponto turístico que deseja procura</label>                  
        <input    
            type='text'
            placeholder='Escreva o nome, localização do lugar desejado'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        
        <Pontos pontos={search.length < 1 ? currentPoints : searchResults(currentPoints)}/>   
     
      <Pagination pointsPerPage={pointsPerPage} totalPoints={pontos.length} paginate={paginate}/>
    </div>
    </div>
  );
}

export default Home;