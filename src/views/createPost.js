import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        image_file: null,
    });

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({...formData, image_file: e.target.files[0] });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (let key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            await api.post('/posts', formDataToSend);
            navigate('/posts'); // Redirection vers la liste des posts
        } catch (err) {
            setError(err.response ? .data ? .message || 'Erreur lors de la création du post');
        }
    };

    return ( <
        >

        <
        div className = "container" >
        <
        h1 > Créer un Post < /h1> {
        error && < p className = "text-danger" > { error } < /p>} <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        name = "title"
        placeholder = "Titre"
        onChange = { handleChange }
        required / >
        <
        textarea name = "content"
        placeholder = "Contenu"
        onChange = { handleChange }
        required / >
        <
        input type = "file"
        name = "image_file"
        onChange = { handleFileChange }
        /> <
        button type = "submit" > Créer < /button> < /
        form > <
        /div> < /
        >
    );
}