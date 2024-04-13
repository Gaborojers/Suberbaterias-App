import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes para cada ruta
import LoginA from "./Pages/LoginA";
import LoginV from "./Pages/LoginV";
import Menu from './Pages/Menu';
import MenuInventario from "./Pages/Menus/MenuInventario";

import InventarioGeneralBaterias from "./Pages/Inventario/InventarioGeneralB";
import InventarioGeneralCascos from "./Pages/Inventario/InventarioGeneralC";

import MenuSucursales1 from "./Pages/Menus/MenuSucursales1";
import InventarioBateriasSalle from "./Pages/Inventario/Baterias/InventarioBateriasSalle";
import InventarioBateriasTeran from "./Pages/Inventario/Baterias/InventarioBateriasTeran";
import InventarioBateriasLibramiento from "./Pages/Inventario/Baterias/InventarioBateriasLibramiento";
import InventarioBateriasOriente from "./Pages/Inventario/Baterias/InventarioBateriasOriente";
import InventarioBateriasVillaflores from "./Pages/Inventario/Baterias/InventarioBateriasVillaflores";

import MenuSucursales2 from "./Pages/Menus/MenuSucursales2";
import InventarioCascosSalle from "./Pages/Inventario/Cascos/InventarioCascosSalle";
import InventarioCascosTeran from "./Pages/Inventario/Cascos/InventarioCascosTeran";
import InventarioCascosLibramiento from "./Pages/Inventario/Cascos/InventarioCascosLibramiento";
import InventarioCascosOriente from "./Pages/Inventario/Cascos/InventarioCascosOriente";
import InventarioCascosVillaflores from "./Pages/Inventario/Cascos/InventarioCascosVillaflores";

import MenuVentasV from "./Pages/Menus/MenuSucursales7";
import VentasSalleV from "./Pages/VentasVendedor/VentasSalle";
import VentasTeranV from "./Pages/VentasVendedor/VentasTeran";
import VentasLibramientoV from "./Pages/VentasVendedor/VentasLibramiento";
import VentasOrienteV from "./Pages/VentasVendedor/VentasOriente";
import VentasVillafloresV from "./Pages/VentasVendedor/VentasVillaflores";

import MenuVentas from "./Pages/Menus/MenuSucursales3";
import VentasSalle from "./Pages/Ventas/VentasSalle";
import VentasTeran from "./Pages/Ventas/VentasTeran";
import VentasLibramiento from "./Pages/Ventas/VentasLibramiento";
import VentasOriente from "./Pages/Ventas/VentasOriente";
import VentasVillaflores from "./Pages/Ventas/VentasVillaflores";

import MenuCompras from "./Pages/Menus/MenuSucursales4";
import ComprasSalle from "./Pages/Compras/ComprasSalle";
import ComprasTeran from "./Pages/Compras/ComprasTeran";
import ComprasLibramiento from "./Pages/Compras/ComprasLibramiento";
import ComprasOriente from "./Pages/Compras/ComprasOriente";
import ComprasVillaflores from "./Pages/Compras/ComprasVillaflores";

import MenuTraspaso from "./Pages/Menus/MenuSucursales5";
import TraspasoSalle from "./Pages/Traspaso/TraspasoSalle";
import TraspasoTeran from "./Pages/Traspaso/TraspasoTeran";
import TraspasoLibramiento from "./Pages/Traspaso/TraspasoLibramiento";
import TraspasoOriente from "./Pages/Traspaso/TraspasoOriente";
import TraspasoVillaflores from "./Pages/Traspaso/TraspasoVillaflores";

import MenuUtilidad from "./Pages/Menus/MenuSucursales6";
import UtilidadSalle from "./Pages/Utilidad/UtilidadSalle";
import UtilidadTeran from "./Pages/Utilidad/UtilidadTeran";
import UtilidadLibramiento from "./Pages/Utilidad/UtilidadLibramiento";
import UtilidadOriente from "./Pages/Utilidad/UtilidadOriente";
import UtilidadVillaflores from "./Pages/Utilidad/UtilidadVillaflores";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginV />} />
          <Route exact path="/administradores" element={<LoginA />} />

          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/menu/menuInventario" element={<MenuInventario/>} />

          <Route exact path="/menu/menuInventario/inventarioGeneralBaterias" element={<InventarioGeneralBaterias />}/>
          <Route exact path="/menu/menuInventario/inventarioGeneralCascos" element={<InventarioGeneralCascos />}/>

          <Route exact path="/menu/menuInventario/menuSucursales1" element={<MenuSucursales1 />}/>
          <Route exact path="/menu/menuInventario/menuSucursales1/inventarioBateriasSalle" element={<InventarioBateriasSalle />} />
          <Route exact path="/menu/menuInventario/menuSucursales1/inventarioBateriasTeran" element={<InventarioBateriasTeran />} />
          <Route exact path="/menu/menuInventario/menuSucursales1/inventarioBateriasLibramiento" element={<InventarioBateriasLibramiento />} />
          <Route exact path="/menu/menuInventario/menuSucursales1/inventarioBateriasOriente" element={<InventarioBateriasOriente />} />
          <Route exact path="/menu/menuInventario/menuSucursales1/inventarioBateriasVillaflores" element={<InventarioBateriasVillaflores />} />

          <Route exact path="/menu/menuInventario/menuSucursales2" element={<MenuSucursales2 />}/> 
          <Route exact path="/menu/menuInventario/menuSucursales2/inventarioCascosSalle" element={<InventarioCascosSalle />} />
          <Route exact path="/menu/menuInventario/menuSucursales2/inventarioCascosTeran" element={<InventarioCascosTeran />} />
          <Route exact path="/menu/menuInventario/menuSucursales2/inventarioCascosLibramiento" element={<InventarioCascosLibramiento />} />
          <Route exact path="/menu/menuInventario/menuSucursales2/inventarioCascosOriente" element={<InventarioCascosOriente />} />
          <Route exact path="/menu/menuInventario/menuSucursales2/inventarioCascosVillaflores" element={<InventarioCascosVillaflores />} />

          <Route exact path="/menu/menuVentasV" element={<MenuVentasV/>} />
          <Route exact path="/menu/menuVentasV/ventasSalleV" element={<VentasSalleV/>} />
          <Route exact path="/menu/menuVentasV/ventasTeranV" element={<VentasTeranV/>} />
          <Route exact path="/menu/menuVentasV/ventasLibramientoV" element={<VentasLibramientoV/>} />
          <Route exact path="/menu/menuVentasV/ventasOrienteV" element={<VentasOrienteV/>} />
          <Route exact path="/menu/menuVentasV/ventasVillafloresV" element={<VentasVillafloresV/>} />
          
          <Route exact path="/menu/menuVentas" element={<MenuVentas/>} />
          <Route exact path="/menu/menuVentas/ventasSalle" element={<VentasSalle/>} />
          <Route exact path="/menu/menuVentas/ventasTeran" element={<VentasTeran/>} />
          <Route exact path="/menu/menuVentas/ventasLibramiento" element={<VentasLibramiento/>} />
          <Route exact path="/menu/menuVentas/ventasOriente" element={<VentasOriente/>} />
          <Route exact path="/menu/menuVentas/ventasVillaflores" element={<VentasVillaflores/>} />
          
          <Route exact path="/menu/menuCompras" element={<MenuCompras/>} />
          <Route exact path="/menu/menuCompras/comprasSalle" element={<ComprasSalle/>} />
          <Route exact path="/menu/menuCompras/comprasTeran" element={<ComprasTeran/>} />
          <Route exact path="/menu/menuCompras/comprasLibramiento" element={<ComprasLibramiento/>} />
          <Route exact path="/menu/menuCompras/comprasOriente" element={<ComprasOriente/>} />
          <Route exact path="/menu/menuCompras/comprasVillaflores" element={<ComprasVillaflores/>} />
          
          <Route exact path="/menu/menuTraspaso" element={<MenuTraspaso/>}/>
          <Route exact path="/menu/menuTraspaso/traspasoSalle" element={<TraspasoSalle/>}/>
          <Route exact path="/menu/menuTraspaso/traspasoTeran" element={<TraspasoTeran/>}/>
          <Route exact path="/menu/menuTraspaso/traspasoLibramiento" element={<TraspasoLibramiento/>}/>
          <Route exact path="/menu/menuTraspaso/traspasoOriente" element={<TraspasoOriente/>}/>
          <Route exact path="/menu/menuTraspaso/traspasoVillaflores" element={<TraspasoVillaflores/>}/>
          
          <Route exact path="/menu/menuUtilidad" element={<MenuUtilidad/>}/>
          <Route exact path="/menu/menuUtilidad/utilidadSalle" element={<UtilidadSalle/>}/>
          <Route exact path="/menu/menuUtilidad/utilidadTeran" element={<UtilidadTeran/>}/>
          <Route exact path="/menu/menuUtilidad/utilidadLibramiento" element={<UtilidadLibramiento/>}/>
          <Route exact path="/menu/menuUtilidad/utilidadOriente" element={<UtilidadOriente/>}/>
          <Route exact path="/menu/menuUtilidad/utilidadVillaflores" element={<UtilidadVillaflores/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;