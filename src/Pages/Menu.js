import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import inventory from '@iconify-icons/material-symbols/inventory';
import transferIcon from '@iconify-icons/mdi/transfer';
import cashRegister from '@iconify-icons/mdi/sale';
import shoppingIcon from '@iconify-icons/icon-park-outline/buy';
import difference from '@iconify-icons/material-symbols/difference';
import credit from '@iconify-icons/material-symbols/credit-card-outline';
import Button from 'react-bootstrap/Button';
import "../Styles/Menu.css"; 
import exit from '@iconify-icons/typcn/arrow-left-outline';

function Menu() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <Link to="/administradores">
        <Button variant="outline-primary" style={{ position: 'absolute', bottom: '91%', left: '10px' }}>
          <div>
          <Icon icon={exit} style={{fontSize: '80px'}}/>
          </div>
        </Button>
      </Link>
      <h1 style={{ left: '85%', fontFamily: 'Roboto, sans-serif', fontSize: '200%', position: 'absolute' }}>Super Baterías Más</h1>
      <div style={{ width: '100%', height: '8%', backgroundColor: '#D7F0B7', position: 'absolute', top: '7%', left: '50%', transform: 'translateX(-50%)' }}>
        <h1 style={{ left: '85%', fontFamily: 'Roboto, sans-serif', fontSize: '200%', position: 'absolute' }}>Menú principal</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top: '30%', left: '40%', transform: 'translateX(-50%)' }}>
        <div style={{ marginRight: '20px' }}>
          <Link to="./menuInventario" style={{textDecoration: 'none'}}>
            <Button className='button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '26px', padding: '30px 40px', borderRadius: '25px' }}>
              <div style={{ marginBottom: '5px' }}>
                <Icon icon={inventory} style={{ fontSize: '150px' }} />
              </div>
              Inventario
            </Button>
          </Link>
          <Link to="./menuTraspaso" style={{textDecoration: 'none'}}>
          <Button className='button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '26px', padding: '30px 40px', borderRadius: '25px', marginTop: '10px' }}>
            <div style={{ marginBottom: '5px' }}>
              <Icon icon={transferIcon} style={{ fontSize: '150px' }} />
            </div>
            Traspaso
          </Button>
          </Link>
        </div>
        <div>
          <Link to="./menuVentas" style={{textDecoration: 'none'}}>
            <Button className='button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '26px', padding: '30px 40px', borderRadius: '25px' }}>
              <div style={{ marginBottom: '5px' }}>
                <Icon icon={cashRegister} style={{ fontSize: '150px' }} />
              </div>
              Ventas
            </Button>
          </Link>
          <Link to="./menuCompras" style={{textDecoration: 'none'}}>
          <Button className='button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '26px', padding: '30px 40px', borderRadius: '25px', marginTop: '10px' }}>
            <div style={{ marginBottom: '5px' }}>
              <Icon icon={shoppingIcon} style={{ fontSize: '150px' }} />
            </div>
            Compras
          </Button>
          </Link>
        </div>
        <div>
          <Link to="./menuUtilidad" style={{textDecoration: 'none'}}>
            <Button className='button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '26px', padding: '30px 40px', borderRadius: '25px' }}>
              <div style={{ marginBottom: '5px' }}>
                <Icon icon={difference} style={{ fontSize: '150px' }} />
              </div>
              Utilidad
            </Button>
          </Link>
          <Link to="./menuCredito" style={{textDecoration: 'none'}}>
          <Button className='button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '26px', padding: '30px 40px', borderRadius: '25px', marginTop: '10px' }}>
            <div style={{ marginBottom: '5px' }}>
              <Icon icon={credit} style={{ fontSize: '150px' }} />
            </div>
            Crédito
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
