import React, { useState, useEffect } from "react";
import { Container, Grid, Image, Button } from 'semantic-ui-react';
import axios from 'axios';
import "./HomeCss.css";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    useEffect(() => {
        // Função para buscar filmes da API
        const fetchMovies = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/movie/popular?api_key=791c3bfe596fc2bb2d59d0d8bafe1367'
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        };

        // Função para buscar séries da API
        const fetchSeries = async () => {
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/tv/popular?api_key=791c3bfe596fc2bb2d59d0d8bafe1367'
                );
                setSeries(response.data.results);
            } catch (error) {
                console.error("Erro ao buscar séries:", error);
            }
        };

        fetchMovies();
        fetchSeries();
    }, []);

    return (
        <div>
            <header className="header-top" >
                <Container>
                    <Grid columns={4} divided>
                        <Grid.Row>
                            <Grid.Column>
                                
                                <Image className="logo" src='/logoreview.png'/>
                                
                            </Grid.Column>
                            
                            <Grid.Column>
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    
                </Container>
                
            </header>
            <Container style={{ marginTop: '4%' }}>
                <h2>Filmes Populares</h2>
                <Grid columns={4}>
                    {movies.map((movie) => (
                        <Grid.Column key={movie.id}>
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <p>{movie.title}</p>
                        </Grid.Column>
                    ))}
                </Grid>
                <h2>Séries Populares</h2>
                <Grid columns={4}>
                    {series.map((serie) => (
                        <Grid.Column key={serie.id}>
                            <Image src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} />
                            <p>{serie.name}</p>
                        </Grid.Column>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}