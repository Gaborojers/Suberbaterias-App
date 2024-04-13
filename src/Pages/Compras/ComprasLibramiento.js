import React, { useState } from 'react';
import '../../Styles/Compras/ComprasLibramiento.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { InputGroup, FormControl} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import exit from '@iconify-icons/typcn/arrow-left-outline';

function ComprasLibramiento() {
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
      <Link to="/menu/menuVentas">
        <Button variant="outline-primary" style={{ position: 'absolute', bottom: '91%', left: '10px' }}>
          <div>
          <Icon icon={exit} style={{fontSize: '80px'}}/>
          </div>
        </Button>
      </Link>
      <h1 style={{left: '82%'}}>Super Baterías Más</h1>
      <div className="greenRectangle">
        <h1>Compras</h1>
        <h1 style={{left: '5%'}}>Libramiento</h1>
        <div style={{left: '20%', position: 'absolute'}}>
        <Dropdown>
            <Dropdown.Toggle className="custom-dropdown-toggles" variant="success" id="dropdown-basic">
                Sucursales
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-dropdown-menu">
              <Dropdown.Item as={NavLink} to="/menu/menuCompras/comprasSalle" className="custom-dropdown-item">La Salle</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuCompras/comprasTeran" className="custom-dropdown-item">Terán</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuCompras/comprasLibramiento" className="custom-dropdown-item">Libramiento</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuCompras/comprasOriente" className="custom-dropdown-item">5a Oriente</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuCompras/comprasVillaflores" className="custom-dropdown-item">Villaflores</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
      </div>

      <h1 style={{left: '35%', top: '17%'}}>Información de la venta</h1>

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

      <Button variant="primary" className='confirm'>Confirmar</Button>{' '}

      <h2 style={{top: '25%', left: '5%' ,position: 'relative', width: '20px'}}>Código: </h2>
      
      {/* Iterar sobre las ventas y renderizarlas */}
      <Button variant="outline-success" className='mas' style={{position: 'relative'}} onClick={agregarVenta}>
        Agregar
      </Button>{' '}
      {ventas.map((venta, index) => (
        <div key={venta.id} style={{top: `${index * 5 + 30}%`, position: 'relative'}} className='ventas'>
          <div className='venta'>
            <h2 style={{top: '33%', left: '5%', position: 'relative', width: '225px'}}>Cantidad:</h2>
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
            <h2 style={{bottom: '-60%', left: '15%', position: 'absolute', width: '20px'}}>Precio:</h2>
            <h2 style={{bottom: '-60%', left: '25%', position: 'absolute', width: '140px'}}>Descuento:</h2>
            <div className='costo-real' style={{bottom: '-60%', left: '35%', position: 'absolute', width: '50%'}}>
              <h2>Precio real:</h2>
              <div style={{top: '94%', position: 'absolute', width: '100%'}}>
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
            <div className='form2' style={{bottom: '-27%', left: '45%', position: 'absolute', width: '50%'}}>
              <h2 style={{top: '10px', position: 'relative', width: '20px'}}>Cascos:</h2>
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
          <Button variant="outline-danger" className='menos btn-outline-danger' style={{top: `${index * 5 + 30}%`}} onClick={() => eliminarVenta(venta.id)}>Eliminar</Button>{' '}
        </div>
      ))}
    </div>
  );
}

export default ComprasLibramiento;
