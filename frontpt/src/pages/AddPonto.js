import { useState, useEffect } from 'react'
import '../components/Form.css'
import '../components/Button.css'

const AddPonto = ({ onAdd }) => {
    const [nome, setNome] = useState('')
    const [uf, setUf] = useState('')
    const [cidade, setCidade] = useState('')
    const [referencia, setReferencia] = useState('')
    const [descritivo, setDescritivo] = useState('')

    const [listUf, setListUf] = useState([])
    const [listCity, setListCity] = useState([])

    useEffect(() => {
        const loadUf = async () => {
            let url = 'https://servicodados.ibge.gov.br/'
            url = url + 'api/v1/localidades/estados'
            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    data.sort((a, b) => a.nome.localeCompare(b.nome))
                    setListUf([...data]);
                })
        }
        loadUf()
    }, [])

    useEffect(() => {
        if (uf) {
            const loadCity = async (id) => {
                let url = 'https://servicodados.ibge.gov.br/api/v1/'
                url = url + `localidades/estados/${id}/municipios`
                await fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        data.sort((a, b) => a.nome.localeCompare(b.nome))
                        setListCity([...data])
                    })
            }
            loadCity(uf)
        }

    }, [uf])

    const onSubmit = (e) => {
        e.preventDefault()

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
        
        <div className='containerCadastro'>
            <h1>Cadastrar Ponto Turístico</h1>
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

                <div className='form-control'>
                <label>Estado</label>
                    <select value={uf} onChange={(e) => setUf(e.target.value)}>
                        <option>Selecione um estado</option>
                        {listUf.map((a, b) => (

                            <option key={a.id} value={a.sigla}>{a.nome}</option>
                        ))}
                    </select>
                </div>
                <div className='form-control'>
                    <label>Cidade</label>
                    <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
                        <option>Selecione uma cidade</option>
                        {listCity.map((a, b) => (
                            <option key={a.id} value={a.sigla}>{a.nome}</option>
                        ))}
                    </select>
                </div>

                <input type='submit' value='Salvar' className='btn btn-block' />
              
            </form>        
        </div>
    )
}

export default AddPonto
