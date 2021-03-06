import React, {useState} from 'react'
import styled from 'styled-components'
import moment from 'moment'
import {save} from '../services/Sheet'

const ContactForm = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ success, setSuccess ] = useState(false)
    const [error, setError ] = useState(false)

    const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const contactMeHandler = async (e) => {

        e.preventDefault()

        const data = {
            Nome: name,
            Email: email,
            Mensagem: message,
            Data: moment().format('DD/MM/YYYY')
        }

        const result = await save(data)

        if (result) {
            setSuccess(result)
            resetForm()
        }else{
            setError(!result)
        }
    }

    return(
        <Form onSubmit={contactMeHandler}>
            <Input>
                <label>Nome: </label>
                <input type ="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </Input>
            <Input>
                <label>E-mail: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Input>
            <Input>
                <label>Mensagem: </label> 
                <textarea rows='5' value={message} onChange={(e) => setMessage(e.target.value)}/>
            </Input>
            <button type="submit">Submit</button>
             {success && <h4>Mensagem enviada com sucesso!</h4>} 
             {error && <h4>Ocorreu um erro. Por favor, envie novamente.</h4>}
        </Form>
        
    )
}

const Input = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 60vh;
    label {
        color: white;
        padding-top: 1rem;
    }
    input {
        border: 2px solid yellow;
        padding: 12px 20px;
        border-radius: 10%;
        width: 100%;
        height: 100%;
    }
    input:focus{
        background-color: #416CD5;
        color: yellow;
    }
    textarea {
        width: 100%auto;
        height: 150%auto;
        padding: 12px 20px;
        box-align: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
    }
    textarea:focus {
        background-color: #416CD5;
        color: yellow;
    }
`
const Form = styled.form`
    button {
        margin-top: 1rem;
    }
    h4 {
        margin-top: 1rem;
    }
`

export default ContactForm