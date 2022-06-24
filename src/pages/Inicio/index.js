import React from "react";

import "./styles.scss";
import Portada from "../../components/organisms/Portada";
import Asociacion from "../../components/organisms/Asociation";
import Contacto from "../../components/organisms/Contact";
import CoursesCapacitation from "../../components/organisms/CoursesCapacitation";
import News from "../../components/organisms/News";
import AboutUs from "../../components/organisms/AboutUs";
import OurTeam from "../../components/organisms/OurTeam";
import OurServices from "../../components/organisms/OurServices";

function Inicio() {
  return (
    <div className="inicio_container">
      <div className="inicio_container2">
        <Portada />
        <div className="cuerpo_container">
          <OurServices />
          <CoursesCapacitation />
          <OurTeam />
          <AboutUs />
          <Asociacion />
          <News />
          
        </div>
        <Contacto />
      </div>
      
    </div>
  );
}

export default Inicio;
