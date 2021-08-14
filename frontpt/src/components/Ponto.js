import React from 'react'

const Ponto = ({ ponto, onClick }) => {
    return (
        <div>
            <h3>{ponto.nome}
            </h3>

            <p>{ponto.uf}</p>
            <p>{ponto.cidade}</p>
        </div>
    )
}

export default Ponto