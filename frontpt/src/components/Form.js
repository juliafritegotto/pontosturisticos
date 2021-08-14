import { useState } from 'react'
import './Form.css'
import './Button.css'

const Form = ({ onAdd }) => {
    const [nome, setNome] = useState('')
    const [uf, setUf] = useState('')
    const [cidade, setCidade] = useState('')
    const [referencia, setReferencia] = useState('')
    const [descritivo, setDescritivo] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        //Quais campos são obrigatórios?
        if (!nome) {
            alert('Por favor adicione o nome')
            return
        }

        onAdd({ nome, uf, cidade, referencia, descritivo })

        setNome('')
        setUf('')
        setCidade('')
        setReferencia('')
        setDescritivo('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Nome</label>
                <input
                    type='text'
                    placeholder='Nome do ponto turístico'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>UF</label>
                <input
                    type='text'
                    placeholder='Escolha o estado'
                    value={uf}
                    onChange={(e) => setUf(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Cidade</label>
                <input
                    type='text'
                    placeholder='Escolha a cidade'
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Referência</label>
                <input
                    type='text'
                    placeholder='É perto de onde?'
                    value={referencia}
                    onChange={(e) => setReferencia(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Descritivo</label>
                <input
                    type='text'
                    placeholder='Descritivo'
                    value={descritivo}
                    onChange={(e) => setDescritivo(e.target.value)} />
            </div>
            <input type='submit' value='Salvar' className='btn btn-block' />
        </form>
    )
}

export default Form
