import axios from 'axios'

export const save = (data) => {
    const config = {
        method: 'post',
        url: 'https://sheet.best/api/sheets/0ca145a8-6bb1-4fb0-9a24-db7b288849e6',
        header: { "Content-Type": "application/json" },
        data
    }

    return axios(config)
    .then(res => {
        console.log('Dados da planilha: ',res)
        return true
    })
    .catch(err => {
        console.log(err)
        return false
    })
}