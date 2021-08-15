import Ponto from './Ponto'

const Pontos = ({ pontos, onClick }) => {

    return (
        <>
            {pontos.map((ponto) => (
                <Ponto key={ponto.pkPonto}
                    ponto={ponto} />
            ))}
        </>
    )
}

export default Pontos
