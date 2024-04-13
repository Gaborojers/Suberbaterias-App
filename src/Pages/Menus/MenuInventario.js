import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import inventory from '@iconify-icons/material-symbols/inventory';
import store from '@iconify-icons/jam/store';
import exit from '@iconify-icons/typcn/arrow-left-outline';
import '../../Styles/Menus/MenuInventario.css';
import Button from 'react-bootstrap/Button';

function MenuInventario() {
  return (
    <div className="container">
      <Link to="/menu">
        <Button variant="outline-primary" style={{ position: 'absolute', bottom: '91%', left: '10px' }}>
          <div>
          <Icon icon={exit} style={{fontSize: '80px'}}/>
          </div>
        </Button>
      </Link>
      <h1 style={{left: '85%'}}>Super Baterías Más</h1>
      <div className="greenRectangle">
        <h1 style={{left: '85%'}}>Menú de Inventario</h1>
      </div>
      <div className="options">
        <div className='group1' style={{left: '5%', position: 'absolute'}}>
          <h1 className='battery' style={{left: '170%'}}>Baterías</h1>
          <Link to="./inventarioGeneralBaterias">
            <Button className='general1 button' style={{position: 'absolute'}}>
              <div className="iconWrapper">
                <Icon icon={inventory} style={{ fontSize: '150px' }} />
              </div> 
              General
            </Button>
          </Link>
          <Link to="./menuSucursales1">
            <Button className='transfer button' style={{left: '205%'}}>
              <div className="iconWrapper">
                <Icon icon={store} style={{ fontSize: '150px' }} />
              </div>
              Sucursal
            </Button>
          </Link>
        </div>

        <div className='group2' style={{left: '58%', position: 'absolute', top: '30%'}}>
          <h1 className='helmet' style={{left: '120%'}}>Cascos</h1>
          <Link to="./inventarioGeneralCascos">
            <Button className='cash button'>
              <div className="iconWrapper">
                <Icon icon={inventory} style={{ fontSize: '150px' }} />
              </div>
              General
            </Button>
          </Link>
          <Link to="./menuSucursales2">
            <Button className='shopping button' style={{left: '415px'}}>
              <div className="iconWrapper">
                <Icon icon={store} style={{ fontSize: '150px' }} />
              </div>
              Sucursales
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuInventario;
