import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Link } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


export default function FormUsuario() {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [dataNascimento, setDataNascimento] = useState();
    const [foneCelular, setFoneCelular] = useState();
    const [sexo, setSexo] = useState();
    const [senha, setSenha] = useState();

    function salvar() {

        let usuarioRequest = {
            nome: nome,
            senha: senha,
            email: email,
            dataNascimento: dataNascimento,
            foneCelular: foneCelular,
            sexo: sexo,

        }

        axios.post("http://localhost:8082/api/usuario", usuarioRequest)
            .then((response) => {
                console.log('Cliente cadastrado com sucesso.')
            })
            .catch((error) => {
                console.log('Erro ao incluir o um cliente.')
            })
    }


    return (

        <div>
            <MenuSistema />
            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Usuario &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                />
                                <Form.Input
                                    required
                                    fluid
                                    label='Sexo'

                                    value={sexo}
                                    onChange={e => setSexo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Email'>
                                    <InputMask
                                        required

                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={foneCelular}
                                        onChange={e => setFoneCelular(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Senha'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={senha}
                                        onChange={e => setSenha(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Data Nascimento'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"

                                        placeholder="Ex: 20/03/1985"
                                        value={dataNascimento}
                                        onChange={e => setDataNascimento(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                                
                            >
                                <Icon name='reply' />
                                <Link to={'/'}>Voltar</Link>

                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>


                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}