import React, { useState } from 'react';
import '../../Styles/Utilidad/UtilidadTeran.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import exit from '@iconify-icons/typcn/arrow-left-outline';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function UtilidadTeran() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

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
        <h1 style={{left: '5%'}}>Teran</h1>
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

      <h1 style={{left: '55%', top: '17%'}}>Reporte</h1>

      
      <div className='menu' style={{ top: '20%' }}>
        <h2>Fecha inicio</h2>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  placeholderText="Seleccionar fecha"
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className='menu2' style={{ top: '20%' }}>
      <h2>Fecha final</h2>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  placeholderText="Seleccionar fecha"
                  className="form-control"
                  dateFormat="yyyy-MM-dd"
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <Button variant="outline-success" className="btn btn-outline-success" style={{position: 'relative', left: '30%', top: '27.5%' }}>
        Buscar
      </Button>
      
      <div className='venta'>
      <h2 style={{top: '33%', left: '5%' ,position: 'relative', width: '225px'}}>Código:</h2>
      <h2 className='costo-real' style={{bottom: '-60%', left: '15%', position: 'absolute', width: '50%'}}>Cantidad:</h2>
      <h2 style={{bottom: '-70%', left: '25%', position: 'absolute', width: '50%'}}>Total esperado:</h2>
      <h2 style={{bottom: '-70%', left: '38%', position: 'absolute', width: '50%'}}>Descuentos:</h2>
      <h2 style={{bottom: '-70%', left: '48%', position: 'absolute', width: '50%'}}>Total real:</h2>
      <h2 style={{bottom: '-70%', left: '58%', position: 'absolute', width: '30%'}}>Utilidad:</h2>
    
      </div>
    </div>
  );
}

export default UtilidadTeran;
