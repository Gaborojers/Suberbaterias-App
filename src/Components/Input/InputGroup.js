import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import '../../Styles/InputGroup.css';

function QuantityInput() {
  return (
    <InputGroup>
      <FormControl
        aria-label="Cantidad"
        aria-describedby="button-addon1 button-addon2"
        type="number"
        min="0"
        max="100" // Puedes establecer un valor máximo si es necesario
        className="form-control" // Agrega la clase "form-control"
      />
    </InputGroup>
  );
}

export default QuantityInput;
