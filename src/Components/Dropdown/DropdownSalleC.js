import Dropdown from 'react-bootstrap/Dropdown';
import "../../Styles/Componentes/Dropdown.css";

function BasicExample() {
  return (
    <Dropdown>
  <Dropdown.Toggle className="custom-dropdown-toggle" variant="success" id="dropdown-basic">
    Grupos
  </Dropdown.Toggle>

  <Dropdown.Menu className="custom-dropdown-menu">
    <Dropdown.Item className="custom-dropdown-item" href="#/action-1">Grupo 1</Dropdown.Item>
    <Dropdown.Item className="custom-dropdown-item" href="#/action-2">Grupo 2</Dropdown.Item>
    <Dropdown.Item className="custom-dropdown-item" href="#/action-3">Grupo 3</Dropdown.Item>
    <Dropdown.Item className="custom-dropdown-item" href="#/action-4">Grupo 4</Dropdown.Item>
    <Dropdown.Item className="custom-dropdown-item" href="#/action-5">Grupo 5</Dropdown.Item>
    <Dropdown.Item className="custom-dropdown-item" href="#/action-6">Grupo 6</Dropdown.Item>
    <Dropdown.Item className="custom-dropdown-item" href="#/action-7">Grupo 7</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

  );
}

export default BasicExample;