import Ponto from './Ponto'

const Pontos = ({ pontos, onClick }) => {

    return (
        <>
            {pontos.map((ponto) => (
                <h3 key={ponto.pkPonto}>{ponto.nome}</h3>
            ))}
        </>
    )
}

export default Pontos
