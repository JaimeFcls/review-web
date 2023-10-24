import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components'; // Importe a biblioteca Styled-components

const CadastroContainer = styled.div`
   
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('./curtain010.jpg') no-repeat center;
    background-size: 100%;s
`;

const Wrapper = styled.div`
    width: 420px;
    background: transparent;
    color: #fff;
    border-radius: 10px;
    padding: 30px 40px;
`;

const Img = styled.img`
    width: 100%;
`;

const H1 = styled.h1`
    font-size: 36px;
    text-align: center;
    color: #fff;
`;

const InputBox = styled.div`
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;

    &::placeholder {
        color: #ffffff;
    }
`;

const Btn = styled.button`
    width: 100%;
    height: 45px;
    background: #fff;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    cursor: pointer;
    font-size: 15px;
    color: #333;
    font-weight: 700;
`;

const Registrar = styled.div`
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
`;

const RegistrarLink = styled.a`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
export default function FormUsuario() {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function salvar() {
        let usuarioRequest = {
            nome: nome,
            senha: senha,
            email: email,
        };

        axios.post("http://localhost:8082/api/usuario", usuarioRequest)
            .then((response) => {
                console.log('Cliente cadastrado com sucesso.');
            })
            .catch((error) => {
                console.log('Erro ao incluir o um cliente.');
            });
    }

    return (
        <CadastroContainer>
            <Wrapper>
                <Img src="/logoreviewbranca.png" alt="Logo" />
                <H1>Login</H1>
                <InputBox>
                    <Input
                        type="text"
                        placeholder="Email"
                        required
                    />
                </InputBox>
                <InputBox>
                    <Input
                        type="text"
                        placeholder="Senha"
                        required
                    />
                </InputBox>
                <Btn onClick={salvar}>Login</Btn>
                <Registrar>
                    <p>Não tem uma conta ? <RegistrarLink href="#">Cadastrar-se</RegistrarLink></p>
                </Registrar>
            </Wrapper>
        </CadastroContainer>
    );
}
