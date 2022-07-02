import { Button, Modal, Form, } from "react-bootstrap";
import React from "react";
import useLogin from "../Login/utilities/useLogin.js";
import { store } from "../../../states/Store.js";

export default function Login() {
  
    const {
        handleEmail, handlePassword,
        storagePush, handleClose,
        email,password
    } = useLogin()

    return (
        <>
           <Modal show={store.getState().modal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                onChange={handleEmail}
                                type="email"
                                name='email'
                                value={email}
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={handlePassword}
                                name='password'
                                type="password"
                                value={password}
                                placeholder="password"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="bg-orange" onClick={storagePush}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}