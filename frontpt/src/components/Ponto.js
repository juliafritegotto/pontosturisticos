import { useState } from 'react'
import * as Md from 'react-icons/md'


const Ponto = ({ ponto, onClick }) => {
    const [mostraDesc, setMostraDesc] = useState(false);
    return (
        <div className='ponto' onClick={() => setMostraDesc(!mostraDesc)} >
            <h3>{ponto.nome}
                {mostraDesc ?
                    <Md.MdExpandLess /> :
                    <Md.MdExpandMore />}
            </h3>
            <p>{ponto.cidade} {ponto.uf}</p>
            <p>{ponto.referencia}</p>
            <p>{mostraDesc && <p>{ponto.descritivo}</p>}</p>
        </div>
    )
}

export default Ponto