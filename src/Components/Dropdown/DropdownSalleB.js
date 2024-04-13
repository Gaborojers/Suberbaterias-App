import Dropdown from 'react-bootstrap/Dropdown';
import "../../Styles/Componentes/Dropdown.css";

function BasicExample() {
  return (
    <Dropdown>
  <Dropdown.Toggle className="custom-dropdown-toggle" variant="success" id="dropdown-basic">
    Categorías
  </Dropdown.Toggle>

  <Dropdown.Menu className="custom-dropdown-menu">
    <Dropdown.Item className="custom-dropdown-item" href="#/action-1">Baterías</Dropdown.Item>
    <Dropdown.Item className="custom-dropdown-item" href="#/action-2">Motobaterías</Dropdown.Item>
    <Dropdown.Item className="custom-dropdown-item" href="#/action-3">Aceites</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

  );
}

export default BasicExample;