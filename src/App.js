import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import "./App.scss";
import Inicio from "./pages/Inicio/index.js";

import HeaderCel from "./componentscel/HeaderCel";
import EspacioTop from "./componentscel/EspacioTop";
import { Curso } from "./components/cursos/Curso";
import Header from "./components/organisms/Header";
import Navbar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";

import { fetchPost } from "./api/fetchpost";

const URL_OBTENER_CURSOS =
  "https://aqvergowasi.com/oficial/cursos/obtenercursos.php";

function App() {
  const [cursos, setCursos] = useState([]);

  const fetchCursos = async () => {
    const data = {
      user: "admin",
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
        <Header />
        <EspacioTop />
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Inicio />}></Route>
          {cursos.map((e, key) => (
            <Route
              path={`/cursos/${e.id_cursos}`}
              element={<Curso datos={e} />}
            ></Route>
          ))}
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
