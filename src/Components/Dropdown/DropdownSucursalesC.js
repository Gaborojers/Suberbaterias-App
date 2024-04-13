import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
import "../../Styles/Componentes/Dropdown.css";

function BasicExample() {
  return (
    <Dropdown>
  <Dropdown.Toggle className="custom-dropdown-toggles" variant="success" id="dropdown-basic">
    Sucursales
  </Dropdown.Toggle>

  <Dropdown.Menu className="custom-dropdown-menu">
        <Dropdown.Item as={NavLink} to="/menu/menuInventario/menuSucursales2/inventarioCascosSalle" className="custom-dropdown-item">La Salle</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/menu/menuInventario/menuSucursales2/inventarioCascosTeran" className="custom-dropdown-item">Terán</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/menu/menuInventario/menuSucursales2/inventarioCascosLibramiento" className="custom-dropdown-item">Libramiento</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/menu/menuInventario/menuSucursales2/inventarioCascosOriente" className="custom-dropdown-item">5a Oriente</Dropdown.Item>
        <Dropdown.Item as={NavLink} to="/menu/menuInventario/menuSucursales2/inventarioCascosVillaflores" className="custom-dropdown-item">Villaflores</Dropdown.Item>
      </Dropdown.Menu>
</Dropdown>

  );
}

export default BasicExample;