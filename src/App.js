import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Routes } from "react-router";

import "./App.scss";
import Inicio from "./pages/Inicio/index.js";

import HeaderCel from "./componentscel/HeaderCel";
import EspacioTop from "./componentscel/EspacioTop";
import Course from "./pages/Course";
import Header from "./components/organisms/Header";
import Navbar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";

import CoursesService from "./shared/services/courses";

function App() {
  const [cursos, setCursos] = useState([]);

  useEffect(async () => {
    const data = await CoursesService.getCourses();
    console.log(data);
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
              path={`/cursos/${e._id}`}
              element={<Course datos={e} />}
            ></Route>
          ))}
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
