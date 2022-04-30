import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import "./App.scss";
import Inicio from "./pages/Inicio";

import Asociacion from "./components/Asociacion";
import HeaderCel from "./componentscel/HeaderCel";
import components from "./components/exportComponents";
import EspacioTop from "./componentscel/EspacioTop";
import { Curso } from "./components/cursos/Curso";

import { fetchPost } from "./api/fetchpost";

const URL_OBTENER_CURSOS = "https://aqvergowasi.com/oficial/cursos/obtenercursos.php";

function App() {

    const [cursos, setCursos] = useState([]);

    const fetchCursos = async () => {
      const data = {
        "user": "admin",
      };
  
      const rspJson = await fetchPost(URL_OBTENER_CURSOS, data);
      setCursos(rspJson);
      console.log(rspJson);
    };

  useEffect(async () => {
    await fetchCursos();
  }, []);

  return (
    <div className="bodyall_container">
      <HashRouter>
            <HeaderCel />
            <components.Header />
            <EspacioTop />
            <components.Navbar />
        <Routes>
          <Route path={"/"} element={<Inicio />}></Route>
          {
              cursos.map((e,key) => (
                    <Route path={`/cursos/${e.id_cursos}`} element={<Curso datos={e}/>}></Route>
        
              ))
          }
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
