import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { Icon } from '@iconify/react';
import store from '@iconify-icons/jam/store';
import '../../Styles/Menus/MenuSucursales.css';
import Button from 'react-bootstrap/Button';
import exit from '@iconify-icons/typcn/arrow-left-outline';

function MenuSucursales6() {
  return (
    <div className="container">
      <Link to="/menu">
        <Button variant="outline-primary" style={{ position: 'absolute', bottom: '91%', left: '10px' }}>
          <div>
          <Icon icon={exit} style={{fontSize: '80px'}}/>
          </div>
        </Button>
      </Link>
      <h1 style={{left: '80%'}}>Super Baterías Más</h1>
      <div className="greenRectangle">
        <h1 style={{left: '80%'}}>Menú de Sucursales</h1>
      </div>
      <div className="options">
        <h1 className='titulo'>Sucursales</h1>
        <div className='group1' style={{left: '25%', position: 'absolute'}}>
          <Link to="./utilidadSalle">
            <Button className='salle button'>
              <div className="iconWrapper">
                <Icon icon={store} style={{ fontSize: '150px' }} /> {/* Ajusta el tamaño del icono */}
              </div>
              La Salle
            </Button>
          </Link>
          <Link to="./utilidadTeran">
          <Button className='teran button'>
            <div className="iconWrapper">
              <Icon icon={store} style={{ fontSize: '150px' }} /> {/* Ajusta el tamaño del icono */}
            </div>
            Terán
          </Button>
          </Link>
          <Link to="./utilidadLibramiento">
          <Button className='libramiento button'>
            <div className="iconWrapper">
              <Icon icon={store} style={{ fontSize: '150px' }} /> {/* Ajusta el tamaño del icono */}
            </div>
            Libramiento
          </Button>
          </Link>
        </div>
        <div className='group2' style={{left: '33%', position: 'absolute'}}>
          <Link to="./utilidadOriente">
          <Button className='oriente button'>
            <div className="iconWrapper">
              <Icon icon={store} style={{ fontSize: '150px' }} /> {/* Ajusta el tamaño del icono */}
            </div>
            5a Oriente
          </Button>
          </Link>
          <Link to="./utilidadVillaflores">
          <Button className='villaflores button'>
            <div className="iconWrapper">
              <Icon icon={store} style={{ fontSize: '150px' }} /> {/* Ajusta el tamaño del icono */}
            </div>
            Villaflores
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MenuSucursales6;
