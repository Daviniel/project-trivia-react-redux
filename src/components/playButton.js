import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlayButton = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlePlayClick = async () => {
        try {
        setLoading(true);

        const response = await axios.post('https://opentdb.com/api.php?amount=10', {
        });

        const { token } = response.data;

        localStorage.setItem('token', token);

        navigate.push('/game');
        } catch (error) {
        console.error('Erro ao obter token:', error);
        } finally {
        setLoading(false);
        }
    };

    return (
        <button
        onClick={handlePlayClick}
        disabled={loading}
        data-testid="btn-play"
        >
        {loading ? 'Carregando...' : 'Play'}
        </button>
    );
};

export default PlayButton;