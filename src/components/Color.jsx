import React from "react";
import Button from "react-bootstrap/Button";
const Color = () => {
    return (
        <>
            <div className="col-3 mt-5">
                <article className="d-flex flex-column border justify-content-center align-items-center w-20">
                    <p className="lead">Nombre color</p>
                    <aside>
                        <div className="muestra"></div>
                    </aside>
                    <aside className="my-1">
                        <Button variant="danger" type="submit" size="sm">
                            Borrar
                        </Button>
                    </aside>
                </article>
            </div>
        </>
    );
};

export default Color;
