import React, {useState} from 'react';
import '../../Styles/Traspaso/TraspasoSalle.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { InputGroup, FormControl} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import exit from '@iconify-icons/typcn/arrow-left-outline';

function TraspasoSalle() {
  const [ventas, setVentas] = useState([]);

  const agregarVenta = () => {
    const nuevaVenta = {
      id: ventas.length + 1,
      cantidad: '',
      precio: '',
      descuento: '',
      precioReal: '',
      cascoss: ''
    };
    setVentas([...ventas, nuevaVenta]);
  };

  const eliminarVenta = (id) => {
    const nuevasVentas = ventas.filter(venta => venta.id !== id);
    setVentas(nuevasVentas);
  };

  return (
    <div className="container">
      <Link to="/menu/menuTraspaso">
        <Button variant="outline-primary" style={{ position: 'absolute', bottom: '91%', left: '10px' }}>
          <div>
          <Icon icon={exit} style={{fontSize: '80px'}}/>
          </div>
        </Button>
      </Link>
      <h1 style={{left: '82%'}}>Super Baterías Más</h1>
      <div className="greenRectangle">
        <h1>Traspaso</h1>
        <h1 style={{left: '5%'}}>La Salle</h1>
        <div style={{left: '20%', position: 'absolute'}}>
        <Dropdown>
            <Dropdown.Toggle className="custom-dropdown-toggles" variant="success" id="dropdown-basic">
                Sucursales
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu">
              <Dropdown.Item as={NavLink} to="/menu/menuTraspaso/traspasoSalle" className="custom-dropdown-item">La Salle</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuTraspaso/traspasoTeran" className="custom-dropdown-item">Terán</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuTraspaso/traspasoLibramiento" className="custom-dropdown-item">Libramiento</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuTraspaso/traspasoOriente" className="custom-dropdown-item">5a Oriente</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuTraspaso/traspasoVillaflores" className="custom-dropdown-item">Villaflores</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>

      <h1 style={{left: '35%', top: '17%'}}>Traspaso de baterías entre locales</h1>

      <div className='menu'>
        <h2>Seleccionar método:</h2>
      <div className='metodo'>
      <Dropdown>
            <Dropdown.Toggle className="custom-dropdown-toggles" variant="success" id="dropdown-basic">
                Método
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu">
                <Dropdown.Item className="custom-dropdown-item" href="#/action-1">Transferir</Dropdown.Item>
                <Dropdown.Item className="custom-dropdown-item" href="#/action-2">Recibir</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>

      <Button variant="primary" className='confirm'>Confirmar</Button>{' '}
      
      {/* Iterar sobre las ventas y renderizarlas */}
      <Button variant="outline-success" className='mas' style={{left: '60%', top: '20%'}} onClick={agregarVenta}>
        Agregar
      </Button>{' '}
      {ventas.map((venta, index) => (
        <div key={venta.id} style={{top: `${index * 5 + 30}%`, position: 'relative'}} className='ventas'>
          <div className='venta'>
      <h2 style={{top: '33%', left: '5%' ,position: 'relative', width: '225px'}}>Sucursal de origen:</h2>  
      <div className='origen'>
      <Dropdown>
            <Dropdown.Toggle className="custom-dropdown-toggles2" variant="success" id="dropdown-basic">
                Sucursales
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu">
                <Dropdown.Item className="custom-dropdown-item" href="#/action-1">La Salle</Dropdown.Item>
                <Dropdown.Item className="custom-dropdown-item" href="#/action-2">Terán</Dropdown.Item>
                <Dropdown.Item className="custom-dropdown-item" href="#/action-3">Libramiento</Dropdown.Item>
                <Dropdown.Item className="custom-dropdown-item" href="#/action-4">5a Oriente</Dropdown.Item>
                <Dropdown.Item className="custom-dropdown-item" href="#/action-5">Villaflores</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </div>

    <h2 style={{bottom: '111px', left: '25%' ,position: 'relative', width: '20px'}}>Búsqueda:</h2>
    <div className='menu2'>
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

    <div className='form2'>
    <h2 style={{top: '-12px' ,position: 'relative', width: '20px'}}>Cascos:</h2>
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
          <Button variant="outline-danger" className='menos btn-outline-danger' style={{position: 'absolute', left: '50%', height: '30%', top: '45%'}} onClick={() => eliminarVenta(venta.id)}>Eliminar</Button>{' '}
        </div>
      ))}
    </div>
  );
}

export default TraspasoSalle;
 