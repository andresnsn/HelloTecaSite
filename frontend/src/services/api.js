import axios from 'axios'

import Userfront from '@userfront/react'
Userfront.init("jb7dwvn6")

const accessToken = Userfront.accessToken()


const api = axios.create({
    baseURL: '/api'
})

export default api

export const deleteItem = (slug) => {
    axios
    .delete(`/api/books/${slug}`, {headers: {'Authorization': `Bearer ${accessToken}`}})
    .then(res => {
        console.log("Resultado: ", res)
        return res
    })
    .catch(e=>{
        console.log("Erro: ", e)
    })
}

export const editItem = (slug, {title, description, content, image, technologies}) => {
    axios
    .patch(`/api/books/${slug}`, {
        title, description, content, image, technologies
    }, {headers: {'Authorization': `Bearer ${accessToken}`}}).then(res => {
        console.log("Alterado com sucesso: ",res)
        return res
    })
        .catch(e => {
            console.log("Erro: ",e)
            return e
        })
}

export const addItem = ({title, description, content, image, technologies}) => {
    axios
    .post(`/api/books/`, {
        title, description, content, image, technologies
    }, {headers: {'Authorization': `Bearer ${accessToken}`}}).then(res => {
        console.log("Adicionado com sucesso: ",res)
        return res
    })
        .catch(e => {
            console.log("Erro: ",e)
            return e
        })
}