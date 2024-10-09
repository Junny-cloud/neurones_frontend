import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', formData);
            localStorage.setItem('token', response.data.token);
            navigate('/posts');
        } catch (err) {
            setError('Identifiants incorrects');
        }
    };

    return ( <
        div className = "container" >
        <
        h1 > Connexion < /h1> {
            error && < p className = "text-danger" > { error } < /p>} <
                form onSubmit = { handleSubmit } >
                <
                input type = "email"
            name = "email"
            placeholder = "Email"
            onChange = { handleChange }
            required / >
                <
                input type = "password"
            name = "password"
            placeholder = "Mot de passe"
            onChange = { handleChange }
            required / >
                <
                button type = "submit" > Se connecter < /button> <
                /form> <
                /div>
        );
    }