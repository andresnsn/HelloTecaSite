import React, { useState } from 'react'
import { Table, Button, Image, Container } from 'react-bootstrap'
import styled from 'styled-components'
import { useApi } from '../../hooks/useApi'
import Dialog from './Dialog'
import BookForm from './BookForm'
import { deleteItem, editItem, addItem } from '../../services/api'

const BookList = () => {
    const handleDel = (slug) => {
        deleteItem(slug)
    }
    const handleAdd = (slug, data) => {
        addBook(data)
    }
    const handleEdit = (slug, data) => {
        editBook(slug, data)
    }
    const[title, setTitle] = useState()
    const [shortDescription, setShortDescription] = useState()
    const [content, setcontent] = useState()
    const [image, setImage] = useState()
    const [slug, setSlug] = useState()
    const [action] = useState({
        del: {
            header: 'Confirma a exclusão?',
            btnVariant: 'danger',
            btnLabel: 'Confirm',
            showBody: true,
            body: 'Você tem certeza que deseja deletar?',
            callback: handleDel
        },
        edit: {
            header: 'Editar livro',
            btnVariant: 'primary',
            btnLabel: 'Salvar',
            showBody: false,
            callback: handleEdit
        },
        add: {
            header: 'Adicionar novo livro',
            btnVariant: 'primary',
            btnLabel: 'Salvar',
            showBody: false,
            callback: handleAdd
        }
    })
    const [currentAction, setCurrentAction] = useState({
        header: '',
        btnVariant: '',
        btnLabel: '',
        body: ''
    })
    const [show, setShow] = useState(false)
    const { data } = useApi('/books')
    const handleShow = (book, actn) => {
        setCurrentAction(actn)
        setShow(true)
        setTitle(book?.title || '')
        setShortDescription(book?.description || '')
        setcontent(book?.content || '')
        setImage(book?.image || '')
        setSlug(book?.slug || '')
    }

    const addBook = (data) => {

        const newBookItem = {
            title: data.title,
            description: data.shortDescription,
            content: data.content,
            image: data.image,
        }

        addItem(newBookItem)
    }

    const editBook = (slug, data) => {

        const editedBookItem = {
            title: data.title,
            description: data.shortDescription,
            content: data.content,
            image: data.image,
        }
    
        editItem(slug, editedBookItem)
    }

    return (
        <Container>
             <AddNewButton variant="primary" size="lg" onClick={() => handleShow(null, action.add)}>Adicionar</AddNewButton>{' '}
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Capa</th>
                    <th>Título</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { data?.data?.map(item => {
                        return(
                            <tr key={item.slug}>
                            <td><Logo src={item.image} thumbnail /></td>
                            <td>{item.title}</td>
                            <td>
                                <Button variant="info" onClick={() => handleShow(item, action.edit)}>Editar</Button>
                                <Button variant="danger" onClick={() => handleShow(item, action.del)}>Deletar</Button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Dialog show={show} setShow={setShow} currentAction={currentAction} slug={slug}>
                    {currentAction.showBody && currentAction.body}
                    {!currentAction.showBody && (
                        <BookForm 
                        title={title} setTitle={setTitle} 
                        shortDescription={shortDescription} setShortDescription={setShortDescription}
                        content={content} setcontent={setcontent}
                        image={image} setImage={setImage}
                        slug={slug}
                        />
                    )}
            </Dialog>
        </Container>
    )
}

const Logo = styled(Image)`
    height: 100px;
`

const AddNewButton = styled(Button)`
    margin-bottom: 1rem;
`

export default BookList