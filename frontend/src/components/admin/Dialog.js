import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Dialog = ({show, setShow, currentAction, children, slug}) => {
    const handleAction = () => {
        currentAction.callback(slug, children[1].props)
        setShow(false)
    }
    return(
        <Modal
        //animation={false}
        show={show}
        onHide={() => setShow(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
    >
        <Modal.Header>
            <Modal.Title>
                {currentAction.header} {slug}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Fechar</Button>{' '}
            <Button variant={currentAction.btnVariant} onClick={() => handleAction()}>{currentAction.btnLabel}</Button>{' '}
        </Modal.Footer>
    </Modal>
    )
}

export default Dialog