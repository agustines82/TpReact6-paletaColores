import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario";
import Color from "./components/Color";
function App() {
    return (
        <main>
            <Formulario />
            <section className="container">
                <aside className="container row justify-content-center align-items-center">
                    <Color />
                </aside>
            </section>
        </main>
    );
}

export default App;
