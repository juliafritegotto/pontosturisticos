import { useState } from 'react'
import Pontos from '../components/Pontos'

function Home() {
  const [pontos, setPontos] = useState([])

  return (
    <div className='home'>

      <Pontos pontos={pontos}></Pontos>


    </div>
  );
}

export default Home;
