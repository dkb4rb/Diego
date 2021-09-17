import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Dropdown, DropdownButton} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";

import "./createPet.css";

function CreatePet(){

  const [inputData, setInputData] = useState({
    nombre: "",
    raza: "",
    tamano: "",
    cuidados: "",
  });



  const vaccine = ['du', 'ff','dd', 'dd','dd'];
  const listVaccine = vaccine.map((vaccine) =>
    <li>{vaccine}</li>
  );
  
  const [message, setMessage] = useState({
    text: false,
    text: "",
    text: "",
    text: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  

  const handleInputs = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
  };
  
  return (
    <div>
      <div className="pet-container">
       <Link className="back-btn" to="/">Volver ⬅</Link>
      {message.show ? (
        <Message text={message.text} type={message.type} />
      ) : null}
      <div className="CreatePet">
        
        <h2 className="title">Crear Mascota</h2>

        <form onSubmit={handleSubmit}>
          <div className="inputs-container">
            <input
              className="input-createPet"
              type="text"
              name="nombre"
              onChange={handleInputs}
              placeholder="Nombre Mascota"
              value={inputData.nombre}
            />
            <input
              className="input-createPet"
              type="text"
              name="raza"
              onChange={handleInputs}
              placeholder="Raza"
              value={inputData.raza}
            />
            <input
              className="input-createPet"
              type="text"
              name="tamano"
              onChange={handleInputs}
              placeholder="Tamaño"
              value={inputData.tamano}
            />
            <input
              className="input-createPet"
              type="text"
              name="cuidados"
              onChange={handleInputs}
              placeholder="Cuidados"
              value={inputData.cuidados}
            />

            <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            title="Vacunas"
            className="mt-2"
            >
           
            <Dropdown.Item className="Droper" href="#/action-1">{vaccine[0]}</Dropdown.Item>
            <Dropdown.Item className="Droper" href="#/action-2"> {vaccine[1]}</Dropdown.Item>
            <Dropdown.Item className="Droper" href="#/action-3"> {vaccine[2]}</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="Droper" href="#/action-4"> {vaccine[3]}</Dropdown.Item>
            <Dropdown.Item className="Droper" href="#/action-5"> {vaccine[4]}</Dropdown.Item>
            </DropdownButton>

          </div>
          <button className="btn-create">Añadir</button>
        </form>
      </div>
      {isLoading ? <Spinner></Spinner> : null}
    </div>
    </div>
   
  );
}

export default CreatePet;
