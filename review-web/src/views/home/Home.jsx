import React, { useState, useEffect } from "react";
import { Container, Grid, Image, Button } from 'semantic-ui-react';
import axios from 'axios';
import styled from 'styled-components';

const InicialContainer = styled.div`
    background: black;
    min-height: 100vh;
`;

const HeaderTop = styled.header`
    padding: 20px 0;
    background-color: black;
`;

const Logo = styled(Image)`
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
`;

const MainContainer = styled(Container)`
    padding-top: 4%;
    color: white;
`;

const FilmesPopulares = styled.h2`
    color: white;
`;

const SeriesPopulares = styled.h2`
    color: white;
`;

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
        <InicialContainer>
            <HeaderTop>
                <Logo src='/logoreview.png' />
            </HeaderTop>
            <MainContainer>
                <FilmesPopulares>Filmes Populares</FilmesPopulares>
                <Grid columns={4}>
                    {movies.map((movie) => (
                        <Grid.Column key={movie.id}>
                            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                            <p>{movie.title}</p>
                        </Grid.Column>
                    ))}
                </Grid>
                <SeriesPopulares>Séries Populares</SeriesPopulares>
                <Grid columns={4}>
                    {series.map((serie) => (
                        <Grid.Column key={serie.id}>
                            <Image src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} />
                            <p>{serie.name}</p>
                        </Grid.Column>
                    ))}
                </Grid>
            </MainContainer>
        </InicialContainer>
    )
}
