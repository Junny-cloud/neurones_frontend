import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        age: '',
        password: '',
        picture_file: null,
    });

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({...formData, picture_file: e.target.files[0] });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (let key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            await api.post('/auth/register', formDataToSend);
            navigate('/login');
        } catch (err) {
            setError(err.response ? .data ? .message || 'Erreur lors de l\'inscription');
        }
    };

    return ( <
        div className = "container" >
        <
        h1 > S 'inscrire</> {
        error && < p className = "text-danger" > { error } < /p>} <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        name = "first_name"
        placeholder = "Prénom"
        onChange = { handleChange }
        required / >
        <
        input type = "text"
        name = "last_name"
        placeholder = "Nom"
        onChange = { handleChange }
        required / >
        <
        input type = "email"
        name = "email"
        placeholder = "Email"
        onChange = { handleChange }
        required / >
        <
        input type = "number"
        name = "age"
        placeholder = "Âge"
        onChange = { handleChange }
        required / >
        <
        input type = "password"
        name = "password"
        placeholder = "Mot de passe"
        onChange = { handleChange }
        required / >
        <
        input type = "file"
        name = "picture_file"
        onChange = { handleFileChange }
        /> <
        button type = "submit" > S 'inscrire</button> < /
        form > <
        /div>
    );
}