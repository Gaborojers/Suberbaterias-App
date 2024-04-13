import React, { useState, useEffect } from 'react';
import '../../Styles/Ventas/VentasTeran.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import exit from '@iconify-icons/typcn/arrow-left-outline';

function VentasTeran() {
  const [productoEncontrado, setProductoEncontrado] = useState(null);
  const [codigoProducto, setCodigoProducto] = useState('');
  const [error, setError] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [descuento, setDescuento] = useState(0);
  const [precioUnitarioReal, setPrecioUnitarioReal] = useState(0);
  const [precioReal, setPrecioReal] = useState(0);
  const [codigoCascos, setCodigoCascos] = useState('');
  const [cantidadCascos, setCantidadCascos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedDateTime = `${now.toLocaleDateString()}`;
      setCurrentDateTime(formattedDateTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const buscarProducto = async () => {
    try {
      const response = await fetch(`http://localhost:3001/productos-acumuladores/buscar?codigo=${codigoProducto}`);
      const data = await response.json();
  
      if (response.ok) {
        setProductoEncontrado(data);
        setError('');
      } else {
        setProductoEncontrado(null);
        setError(data.message || 'Error al buscar el producto');
      }
    } catch (error) {
      console.error('Error al buscar el producto:', error);
      setError('Error interno del servidor');
    }
  };

  const handleCodigoChange = (e) => {
    setCodigoProducto(e.target.value);
  };

  const handleCantidadChange = (e) => {
    const cantidad = parseInt(e.target.value);
    setCantidadSeleccionada(cantidad);
    calcularPrecioReal(cantidad, descuento);
  };

  const handleDescuentoChange = (e) => {
    const descuento = parseFloat(e.target.value);
    setDescuento(descuento);
    calcularPrecioReal(cantidadSeleccionada, descuento);
  };

  const calcularPrecioReal = (cantidad, descuento) => {
    if (productoEncontrado) {
      const precioUnitario = productoEncontrado.precioLista;
      const precioConDescuento = (precioUnitario * (1 - descuento / 100)).toFixed(2);
      const precioTotal = (precioConDescuento * cantidad).toFixed(2);
      setPrecioUnitarioReal(precioConDescuento);
      setPrecioReal(precioTotal);
    }
  };

  const actualizarInventario = async (idProducto, cantidadVendida) => {
    try {
      const response = await fetch(`http://localhost:3001/productos-acumuladores/realizar-venta`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id_pAcumulador: idProducto, cantidadVendida: cantidadVendida })
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar el inventario');
      }
    } catch (error) {
      console.error('Error al actualizar el inventario:', error);
      throw error;
    }
  };

  const actualizarCantidadCascos = async (codigoCascos, cantidadCascos) => {
    try {
      const response = await fetch(`http://localhost:3001/productos-cascos/actualizar-cantidad`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ codigoCascos, cantidadCascos })
      });

      if (!response.ok) {
        throw new Error('Error al actualizar la cantidad de cascos');
      } 
    } catch (error) {
      console.error('Error al actualizar la cantidad de cascos:', error);
      throw error;
    }
  };

  const handleCodigoCascosChange = (e) => {
    setCodigoCascos(e.target.value);
  };

  const handleCantidadCascosChange = (e) => {
    const cantidad = parseInt(e.target.value);
    setCantidadCascos(cantidad);
  };

  const handleConfirmarVenta = async () => {
    try {
      if (cantidadSeleccionada > productoEncontrado.cantidad) {
        alert('No hay suficiente cantidad disponible para realizar esta venta.');
        return;
      }
  
      await actualizarInventario(productoEncontrado.id_pAcumulador, cantidadSeleccionada);
      await actualizarCantidadCascos(codigoCascos, cantidadCascos);
  
      const ventaData = {
        id_acumulador: productoEncontrado.id_pAcumulador,
        cantidad: cantidadSeleccionada,
        precio_unit_sug: productoEncontrado.precioLista,
        descuento: descuento,
        precio_unit_real: precioUnitarioReal,
        monto_total: precioReal,
        id_vendedor: obtenerIdVendedor()
      };
  
      const response = await fetch('http://localhost:3001/ventas-acumuladores/ventas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ventaData)
      });
  
      if (response.ok) {
        limpiarCampos();
        alert('Venta confirmada con éxito');
      } else {
        const responseData = await response.json();
        throw new Error(responseData.message || 'Error al confirmar la venta');
      }
    } catch (error) {
      console.error('Error al confirmar la venta:', error);
      alert('Error al confirmar la venta. Por favor, inténtalo de nuevo.');
    }
  };

  const obtenerIdVendedor = () => {
    const vendedorString = localStorage.getItem('vendedor');
    
    if (vendedorString) {
      const vendedor = JSON.parse(vendedorString);
      return vendedor.id_vendedor;
    } else {
      return null;
    }
  };

  const limpiarCampos = () => {
    setProductoEncontrado(null);
    setCodigoProducto('');
    setError('');
    setCantidadSeleccionada(1);
    setDescuento(0);
    setPrecioReal(0);
  };

  const renderInfoVenta = () => {
    if (productoEncontrado) {
      return (
        <div style={{ position: 'relative', top: '30%' }} className='ventas'>
          <div className='venta'>
            <h2 style={{ top: '25%', left: '5%', position: 'relative', width: '20%' }}>Código: {productoEncontrado.codigo}</h2>
            <h2 style={{ top: '25%', left: '5%', position: 'relative', width: '10%' }}>Fecha: {currentDateTime}</h2>
            <h2 style={{ bottom: '-60%', left: '5%', position: 'absolute' }}>Disponible:</h2>
            <h2 style={{ bottom: '-85%', left: '7.5%', position: 'absolute' }}>{productoEncontrado.cantidad}</h2>
            <h2 style={{ left: '15%', width: '25px', top: '97.5%', position: 'absolute' }}>Cantidad:</h2>
            <div className='cantidad' style={{ top: '150%', right: '81.5%', position: 'absolute' }}>
              <InputGroup>
                <FormControl
                  aria-label="Cantidad"
                  aria-describedby="button-addon1 button-addon2"
                  type="number"
                  min="0"
                  max="100"
                  className="form-control small"
                  onChange={handleCantidadChange}
                />
              </InputGroup>
            </div>
            <h2 style={{ bottom: '-60%', left: '25%', position: 'absolute' }}>Precio:</h2>
            <h2 style={{ bottom: '-85%', left: '25%', position: 'absolute' }}>{productoEncontrado.precioLista}</h2>
            <div className='costo-real' style={{ bottom: '-60%', left: '33%', position: 'absolute', width: '45%' }}>
              <h2>Descuento:</h2>
              <div style={{ top: '94%', position: 'absolute', width: '100%' }}>
                <InputGroup>
                  <FormControl
                    aria-label="Descuento"
                    aria-describedby="button-addon1 button-addon2"
                    type="number"
                    min="0"
                    max="100"
                    className="form-control2 small2"
                    onChange={handleDescuentoChange}
                  />
                </InputGroup>
              </div>
            </div>
            <h2 style={{ bottom: '-60%', left: '42%', position: 'absolute' }}>Precio unitario:</h2>
            <h2 style={{ bottom: '-85%', left: '44.5%', position: 'absolute' }}>{precioUnitarioReal}</h2>
            <h2 style={{ bottom: '-60%', left: '52.5%', position: 'absolute' }}>Precio real:</h2>
            <h2 style={{ bottom: '-85%', left: '53.5%', position: 'absolute' }}>{precioReal}</h2>
            <div className='form2' style={{ left: '61%', top: '181%' }}>
              <h2 style={{ top: '-56%', position: 'relative', left: '-113%' }}>Código-cascos:</h2>
              <div style={{ top: '', left: '-117.5%', position: 'relative', width: '100%' }}>
                <InputGroup>
                  <FormControl
                    aria-label="Código cascos"
                    aria-describedby="button-addon1 button-addon2"
                    type="text"
                    className="form-control small"
                    onChange={handleCodigoCascosChange}
                  />
                </InputGroup>
              </div>
            </div>
            <div className='form2' style={{ left: '61%', top: '181%' }}>
              <h2 style={{ top: '76%', position: 'relative', left: '-80.5%' }}>Cantidad-cascos:</h2>
              <div style={{ top: '170%', left: '-85.5%', position: 'relative' }}>
                <InputGroup>
                  <FormControl
                    aria-label="Cantidad"
                    aria-describedby="button-addon1 button-addon2"
                    type="number"
                    min="0"
                    max="100"
                    className="form-control small"
                    onChange={handleCantidadCascosChange}
                  />
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="container">
      <Link to="/menu/menuVentas">
        <Button variant="outline-primary" style={{ position: 'absolute', bottom: '91%', left: '10px' }}>
          <div>
            <Icon icon={exit} style={{ fontSize: '80px' }} />
          </div>
        </Button>
      </Link>
      <h1 style={{ left: '82%' }}>Super Baterías Más</h1>
      <div className="greenRectangle">
        <h1>Ventas</h1>
        <h1 style={{ left: '5%' }}>Teran</h1>
        <div style={{ left: '20%', position: 'absolute' }}>
          <Dropdown>
            <Dropdown.Toggle className="custom-dropdown-toggles" variant="success" id="dropdown-basic">
              Sucursales
            </Dropdown.Toggle>
            <Dropdown.Menu className="custom-dropdown-menu">
              <Dropdown.Item as={NavLink} to="/menu/menuVentas/ventasSalle" className="custom-dropdown-item">La Salle</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuVentas/ventasTeran" className="custom-dropdown-item">Terán</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuVentas/ventasLibramiento" className="custom-dropdown-item">Libramiento</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuVentas/ventasOriente" className="custom-dropdown-item">5a Oriente</Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/menu/menuVentas/ventasVillaflores" className="custom-dropdown-item">Villaflores</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <h1 style={{ left: '35%', top: '17%' }}>Información de la venta</h1>

      <div className='menu' style={{ top: '20%' }}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Código"
                  className="me-2 form-control"
                  aria-label="Search"
                  onChange={handleCodigoChange}
                />
                <Button variant="outline-success" className="btn btn-outline-success" onClick={buscarProducto}>Buscar</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {renderInfoVenta()}

      <Button variant="primary" className='confirm' onClick={handleConfirmarVenta}>Confirmar</Button>{' '}

    </div>
  );
}

export default VentasTeran;
