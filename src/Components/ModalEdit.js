import React, { Component, props, useState } from "react";
import { Modal, Button, Row, Col, Nav, Form } from "react-bootstrap";


function ModalEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Item>
        <Nav.Link variant="warning" onClick={handleShow}>
          Edit
        </Nav.Link>
      </Nav.Item>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Url Image</Form.Label>
              <Form.Control type="email" placeholder="https://bukukita.com" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="email" placeholder="Arti Sebuah Nama" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="email"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vehicula cursus nisl, a hendrerit lacus laoreet imperdiet.
              Curabitur purus purus, volutpat mattis sapien nec, molestie
              feugiat felis. Vivamus congue eget ligula in dapibus. Proin
              posuere ligula orci,"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;

