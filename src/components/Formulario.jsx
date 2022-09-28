import React, { useState } from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

//creo un objeto colores pre-definido que son los colores que el programa va a poner exponer. si es que el color no se encuetra entre las propiedades de este objeto entonces el programa expondrà un alert diciendo color no disponible:
const coloresAutorizados = {
    rojo: `#E80606`,
    verde: `#1A6D02`,
    amarillo: `#F8F806`,
    azul: `#0615F8`,
};

const Formulario = () => {
    //en el evento onChange en el FormControl necesito ir guardando lo que se escribe, esto lo hago en la variable de estado color.
    const [color, setColor] = useState("");
    //en el evento onSubmit del Form necesito guardar la variable color en un arreglo de colores
    //para ello primero debo crear el arreglo:
    const [listaColores, setListaColores] = useState([]);

    //para el evento onSubmit del form usamos un manejador de eventos
    const handleSubmit = (e) => {
        e.preventDefault();
        //debo validar que el color ingresado exista dentro de las propiedades del objeto.
        if (!coloresAutorizados.hasOwnProperty(color)) {
            //si no existe tira el cartel
            Swal.fire({
                icon: "error",
                title: "Color no autorizado",
                text: "Elije otro color",
            });
            // y reseteamos el valor de la variable color a su valor inicial (se limpia el input)
            setColor("");
        } else {
            //guardo la variable color en la lista de colores
            setListaColores([...listaColores, color]);
            //reseteamos el valor de la variable color a su valor inicial
            setColor("");
            //limpiamos el Form control (value={color})
        }
    };

    return (
        <>
            <section className="container">
                <Form className="container my-5 bg-ligth" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 ms-1" controlId="formBasicText">
                        <Form.Label className="mt-2 mb-0">Administrador de colores</Form.Label>
                        <hr></hr>
                        <div className="row">
                            <aside className="col-2 ms-3 muestra"></aside>
                            <aside className="col-8 ms-3">
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Ingresa un color"
                                    onChange={(e) => setColor(e.target.value)}
                                    value={color}
                                />
                                <Form.Text className="text-muted">Elige entre rojo, azul, verde o amarillo</Form.Text>
                            </aside>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Button variant="dark" type="submit">
                                Guardar
                            </Button>
                        </div>
                    </Form.Group>
                </Form>
            </section>
        </>
    );
};

export default Formulario;
