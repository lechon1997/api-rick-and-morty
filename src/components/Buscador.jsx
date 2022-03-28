import React, { useState } from "react";
import "../estilos/global.scss";

const Buscador = () => {
  const [ventanaBuscador, setVentanaBuscador] = useState(false);
  const handleInputChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="w-500px h-400px">
      <input name="buscador" type="text" onChange={handleInputChange} />
      <div className="w-25 h-25">
        <p>buscador</p>
      </div>
    </div>
  );
};

export default Buscador;
