import React from 'react';
import { Route, Routes } from "react-router-dom";

//import FormCliente from './views/cliente/FormCliente';
//import FormEntregador from './views/entregador/FormEntregador';
import Home from './views/home/Home';
import FormUsuario from './views/usuario/FormUsuario';
//import FormProduto from './views/produto/FormProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cadastro" element={<FormUsuario />} />              
            </Routes>
        </>
    )
}

export default Rotas
