import { useEffect, useState } from 'react'
import Pontos from '../components/Pontos'
import Pagination from '../components/Pagination'

function Home({term}) {
  const [pontos, setPontos] = useState([])
  const [ search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pointsPerPage] = useState(7)
 
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

        <label><b>Digite um ponto turístico que deseja procurar</b></label>                  
        <input    
            type='text'
            placeholder='Escreva o nome, localização do lugar desejado'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        
        <Pontos pontos={search.length < 1 ? currentPoints : searchResults(currentPoints)}/>   
     
      <Pagination pointsPerPage={pointsPerPage} totalPoints={pontos.length} paginate={paginate}/>
    </div>
    <footer>
            <p>Copyright&copy; 2021</p>          
    </footer>
    </div>
     
  );
}

export default Home;