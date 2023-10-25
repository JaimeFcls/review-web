import React, { useState, useEffect } from "react";
import InputMask from 'react-input-mask';
import { useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components'; // Importe a biblioteca Styled-components

const CadastroContainer = styled.div`
   
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('./img4.jpg') no-repeat center;
    background-size: 100%;s
`;

const Wrapper = styled.div`
    width: 420px;
    background: transparent;
    color: black;
    border-radius: 10px;
    padding: 30px 40px;
`;

const Img = styled.img`
    width: 100%;
`;

const H1 = styled.h1`
    font-size: 36px;
    text-align: center;
    color: #092051;
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
    background: #1969C8;
    border: none;
    outline: none;
    border: 2px solid rgba(255, 255, 255, .2);
    border-radius: 40px;
    font-size: 16px;
    color: white;
    padding: 20px 45px 20px 20px;

    &::placeholder {
        color: white;
    }
`;

const Btn = styled.button`
    width: 100%;
    height: 45px;
    background: #092051;
    border: none;
    outline: none;
    border-radius: 40px;
    box-shadow: 0 0 10px rgba(205, 233, 255);
    cursor: pointer;
    font-size: 15px;
    color: #fff;
    font-weight: 700;
`;

const Registrar = styled.div`
    font-size: 14.5px;
    text-align: center;
    margin: 20px 0 15px;
`;

const RegistrarLink = styled.a`
    color: black;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
export default function FormUsuario() {
    const { state } = useLocation();
    const [idUsuario, setIdUsuario] = useState();

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function salvar() {
        let usuarioRequest = {
            nome: nome,
            email: email,
            senha: senha,
        };

        if (idUsuario != null) {
            //Alteração:
            axios
                .put("http://localhost:8082/api/usuario/" + idUsuario, usuarioRequest)
                .then((response) => {
                    console.log("Usuario alterado com sucesso.");
                })
                .catch((error) => {
                    console.log("Erro ao alter um Usuario.");
                });
        } else {
            //Cadastro:
            axios
                .post("http://localhost:8082/api/usuario", usuarioRequest)
                .then((response) => {
                    console.log("Usuario cadastrado com sucesso.");
                })
                .catch((error) => {
                    console.log("Erro ao incluir o Usuario.");
                });
        }
    }

    useEffect(() => {
        if (state != null && state.id != null) {
            axios
                .get("http://localhost:8082/api/usuario/" + state.id)
                .then((response) => {
                    setIdUsuario(response.data.id);
                    setNome(response.data.nome);
                    setEmail(response.data.email);
                    setSenha(response.data.senha);
                    
                });
        }
    }, [state]);

    return (
        <CadastroContainer>
            <Wrapper>
                <a href="/">
                <Img src="/logoreview.png" alt="Logo" />
                </a>
                <H1>Cadastre-se</H1>
                <InputBox>
                    <Input
                        type="text"
                        placeholder="Nome"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </InputBox>
                <InputBox>
                    <Input
                        type="text"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputBox>
                <InputBox>
                    <Input
                        type="password"
                        placeholder="Senha"
                        required
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </InputBox>
                <InputBox>
                    <Input
                        type="password"
                        placeholder="Confirmar Senha"
                        required                 
                    />
                </InputBox>
                <Btn onClick={salvar}>Cadastre-se</Btn>
                <Registrar>
                    <p>Já tem uma conta ? <a href="login" target="_blank">Login</a></p>
                </Registrar>
            </Wrapper>
        </CadastroContainer>
    );
}
