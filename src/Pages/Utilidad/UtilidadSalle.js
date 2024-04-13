import React from 'react';
import '../../Styles/Utilidad/UtilidadSalle.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { InputGroup, FormControl} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import exit from '@iconify-icons/typcn/arrow-left-outline';

function UtilidadSalle() {
  return (
    <div className="container" style={{height: '97vh'}}>
      <Link to="/menu/menuUtilidad">
        <Button variant="outline-primary" style={{ position: 'absolute', bottom: '92%', left: '10px' }}>
          <div>
          <Icon icon={exit} style={{fontSize: '80px'}}/>
          </div>
        </Button>
      </Link>
      <h1 style={{left: '82%'}}>Super Baterías Más</h1>
      <div className="greenRectangle">
        <h1>Utilidad</h1>
        <h1 style={{left: '5%'}}>La Salle</h1>
        <div style={{left: '17%', position: 'absolute'}}>
        <Dropdown>
            <Dropdown.Toggle className="custom-dropdown-toggles" variant="success" id="dropdown-basic">
                Sucursales
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu">
              <Dropdown.Item as={NavLink} to="/menu/menuUtilidad/utilidadSalle" className="custom-dropdown-item">La Salle</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuUtilidad/utilidadTeran" className="custom-dropdown-item">Terán</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuUtilidad/utilidadLibramiento" className="custom-dropdown-item">Libramiento</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuUtilidad/utilidadOriente" className="custom-dropdown-item">5a Oriente</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuUtilidad/utilidadVillaflores" className="custom-dropdown-item">Villaflores</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>

      <h1 style={{left: '35%', top: '17%'}}>Utilidad de baterías</h1>

      <div className='menu' style={{top: '20%'}}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex">
                  <Form.Control
                  type="search"
                  placeholder="Código"
                  className="me-2 form-control"
                  aria-label="Search"
                  />
                <Button variant="outline-success" className="btn btn-outline-success">Buscar</Button>
                </Form>
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <h2 style={{top: '25%', left: '5%' ,position: 'relative', width: '20px'}}>Código: </h2>
      
      <div className='venta'>
      <h2 style={{top: '33%', left: '5%' ,position: 'relative', width: '225px'}}>Precio de compra:</h2>
      <div className='cantidad' style={{top: '150%', right: '92%', position: 'absolute'}}>
      <InputGroup>
        <FormControl
          aria-label="Cantidad"
          aria-describedby="button-addon1 button-addon2"
          type="number"
          min="0"
          max="100" // Puedes establecer un valor máximo si es necesario
          className="form-control small" // Agrega la clase "small"
        />
      </InputGroup>
      </div>

    <div className='costo-real' style={{bottom: '-60%', left: '25%', position: 'absolute', width: '50%'}}>
    <h2>Precio de venta:</h2> 
    <div style={{top: '94%', position: 'absolute', width: '100%'}}>
    <InputGroup>
        <FormControl
          aria-label="Cantidad"
          aria-describedby="button-addon1 button-addon2"
          type="number" //CODIGO DE BATERIA, DESCRIPCION DE BATERIA, CANTIDAD DE BATERIAS QUE SE VENDIO, PRECIO DE COMPRA, PRECIO REAL, 
          min="0"
          max="100" // Puedes establecer un valor máximo si es necesario
          className="form-control2 small2" // Agrega la clase "small"
        />
      </InputGroup>
    </div>
    </div>

    <div className='form2' style={{bottom: '-27%', left: '40%', position: 'absolute', width: '50%'}}>
    <h2 style={{top: '10px' ,position: 'relative', width: '20px'}}>Descuento:</h2>
      <InputGroup>
        <FormControl
          aria-label="Cantidad"
          aria-describedby="button-addon1 button-addon2"
          type="number"
          min="0"
          max="100" // Puedes establecer un valor máximo si es necesario
          className="form-control2 small2" // Agrega la clase "small"
        />
      </InputGroup>
    </div>
      </div>
    </div>
  );
}

export default UtilidadSalle;
