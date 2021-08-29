import axios from 'axios'

export const save = (data) => {
    const config = {
        method: 'post',
        url: 'https://sheet.best/api/sheets/969f4d8b-7bc0-446a-95d1-aa9e76f0a0fb',
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