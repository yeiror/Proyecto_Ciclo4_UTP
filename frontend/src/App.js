import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { Routes, Route } from "react-router-dom";

import Tarjetainicio from "./components/card_inicio";
import { Barranavegacion } from "./components/navbar";
import Tarjetahombre from "./components/card_hombre";

function App() {
  return (
    <div className="App">
      <Barranavegacion />

      <main>
        <Routes>
          <Route path="/"  element={<Tarjetainicio />} />
          <Route path="/Hombre" element={<Tarjetahombre/>} />
          <Route path="/Mujer" />
          <Route path="/Ventas" />
          <Route path="/Login" />
        </Routes>
      </main>
    </div>
  );
}

export default App;
