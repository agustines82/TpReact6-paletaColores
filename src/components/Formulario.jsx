import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Formulario = () => {
    return (
        <>
            <section className="container">
                <Form className="container my-5">
                    <Form.Group className="mb-3 ms-1" controlId="formBasicText">
                        <Form.Label className="mt-2">Administrador de colores</Form.Label>
                        <div className="row">
                            <aside className="col-2 ms-3 muestra"></aside>
                            <aside className="col-8 ms-3">
                                <Form.Control type="text" placeholder="Ingresa un color" />
                                <Form.Text className="text-muted">Elige entre rojo, azul, verde o amarillo</Form.Text>
                            </aside>
                        </div>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </section>
        </>
    );
};

export default Formulario;
