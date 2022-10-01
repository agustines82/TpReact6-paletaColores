import React, { useEffect, useState } from "react";
import ListaColores from "./ListaColores";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

const Formulario = () => {
    //cargo los colores seleccionados que se guardaron en el local storage
    const coloresLocalStorage = JSON.parse(localStorage.getItem("keyListaColores")) || [];
    //en el evento onChange en el FormControl necesito ir guardando lo que se escribe, esto lo hago en la variable de estado color.
    const [color, setColor] = useState("");
    //en el evento onSubmit del Form necesito guardar la variable color en un arreglo de colores
    //para ello primero debo crear el arreglo:
    //inicializo la variable con el arreglo de colores cargados en el local storage
    const [listaColores, setListaColores] = useState(coloresLocalStorage);

    //ciclo de vida del componente
    useEffect(() => {
        //guardar el arreglo de los colores en el local storage
        localStorage.setItem("keyListaColores", JSON.stringify(listaColores));
    }, [listaColores]);

    //para el evento onSubmit del form usamos un manejador de eventos
    const handleSubmit = (e) => {
        e.preventDefault();
        if (color.trim().length > 2) {
            //guardo la variable color en la lista de colores
            setListaColores([...listaColores, color]);
            //reseteamos el valor de la variable color a su valor inicial
            setColor("");
            //limpiamos el Form control (value={color})
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Ingresa un color",
                footer: "Solo acepta colores en ingles",
            });
            setColor("");
        }
    };

    const borrarColor = (colorx) => {
        // hacer un arreglo nuevo sin la tarea a borrar
        let listaColores2 = listaColores.filter((item) => item !== colorx);
        //actualizo el state
        setListaColores(listaColores2);
    };

    return (
        <>
            <section className="container">
                <Form className="container my-5 bg-ligth" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 ms-1" controlId="formBasicText">
                        <Form.Label className="mt-2 mb-0">Administrador de colores</Form.Label>
                        <hr></hr>
                        <div className="row">
                            <aside className="col-2 ms-3 cajaColor" style={{ background: color }}></aside>
                            <aside className="col-8 ms-3">
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Ingresa un color"
                                    onChange={(e) => setColor(e.target.value.toLowerCase())}
                                    value={color}
                                />
                                <Form.Text className="text-muted">Los colores a ingresar deberan expresarse en ingles o codigo hexadecimal</Form.Text>
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
            <ListaColores listaColores={listaColores} borrarColor={borrarColor} />
        </>
    );
};

export default Formulario;
