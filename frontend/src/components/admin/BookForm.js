import React, {useState} from 'react'
import styled from 'styled-components'
import {Form, Container, CardColumns, Card, Button, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const PortfolioForm = ({title, setTitle, shortDescription, setShortDescription, 
    content, setcontent, image, setImage, slug, tech, setTech}) => {
        const [type, setType] = useState('')
        const [icon, setIcon] = useState('')
        const [label, setLabel] = useState('')
        const handleRemoveItem = (id) => {
            const newTech = tech.filter(element => element._id !== id)
            setTech(newTech)
        }

        const handleAddItem = () => {
            if(type.length > 0 && label.length > 0 && icon.length > 0) {
                const newId = Math.random().toString(36).substring(7)
                const newTech = {
                    iconType: type,
                    icon, label,
                    _id: newId
                }
                setTech([...tech, newTech])
            }
        }
    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Título</Form.Label>
                    <Form.Control 
                        type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Sinopse</Form.Label>
                    <Form.Control 
                    type="text"
                    value={shortDescription}
                    onChange={(e)=>setShortDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>História</Form.Label>
                    <Form.Control 
                        as="textarea" rows={5}
                        value={content}
                        onChange={(e)=>setcontent(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Imagem</Form.Label>
                    <Form.Control 
                        type="text"
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                    />
                </Form.Group>
            </Form>

            <CardColumn>
                {
                    tech?.map(technology => {
                        return(
                            <Card>
                            <Card.Body>
                                <Card.Text>
                                    <FontAwesomeIcon icon={[technology.iconType, technology.icon]} size='3x'/> {technology.label}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button size="sm" variant='danger' onClick={() => handleRemoveItem(technology._id)}>Remove</Button>
                            </Card.Footer>
                        </Card>
                        )
                    })
                }
            </CardColumn>
        </Container>
    )
}

const FormRow = styled(Form.Row)`
    display: flex;
`

const Column = styled(Col)`
    margin-top: 0.4rem;
    margin-right: 0.3rem;
`

const CardColumn = styled(CardColumns)`
    margin-top: 0.4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, 240px);
`

export default PortfolioForm