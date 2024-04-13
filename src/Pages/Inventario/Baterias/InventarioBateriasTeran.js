import React from 'react';
import '../../../Styles/Inventario/InventarioSalleB.css';
import Menu from '../../../Components/Dropdown/DropdownSalleB';
import Sucursales from '../../../Components/Dropdown/DropdownSucursalesB';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import exit from '@iconify-icons/typcn/arrow-left-outline';

function inventarioBateriasTeran() {
  return (
    <div className="container">
      <Link to="/menu/menuInventario/menuSucursales1">
        <Button variant="outline-primary" style={{ position: 'absolute', bottom: '91%', left: '10px' }}>
          <div>
          <Icon icon={exit} style={{fontSize: '80px'}}/>
          </div>
        </Button>
      </Link>
      <h1 style={{left: '82%'}}>Super Baterías Más</h1>
      <div className="greenRectangle">
        <h1 style={{left: '80%'}}>Inventario de Baterías</h1>
        <h1 style={{left: '5%'}}>Teran</h1>
        <div className='sucursales'>
        <Sucursales></Sucursales>
        </div>
      </div>
      <div className='menu2' style={{top: '19%'}}>
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
      <div className='menu' style={{left: '5%', top: '22%'}}>
      <Menu></Menu>
      </div>
    </div> 
  );
}

export default inventarioBateriasTeran;
