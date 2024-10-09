import React, { useEffect, useState } from 'react';
import api from '../utils/api';

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState(5);
    const [sortBy, setSortBy] = useState('created_at');
    const [order, setOrder] = useState('desc');
    const [skip, setSkip] = useState(0);

    const [error, setError] = useState(null);

    const fetchPosts = async() => {
        setLoading(true);
        try {
            const response = await api.get(`/posts?q=${search}&limit=${limit}&sortBy=${sortBy}&order=${order}&skip=${skip}`);
            setPosts(response.data.data);
        } catch (err) {
            setError('Erreur lors du chargement des posts');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, [search, limit, sortBy, order, skip]);

    return ( <
            div className = "container" >
            <
            h1 > Mes Posts < /h1> {
            error && < p className = "text-danger" > { error } < /p>} <
            input type = "text"
            placeholder = "Recherche"
            value = { search }
            onChange = {
                (e) => setSearch(e.target.value)
            }
            /> <
            button onClick = {
                () => setSkip(skip + limit)
            } > Charger plus < /button> {
            loading ? ( <
                p > Chargement... < /p>
            ) : ( <
                ul > {
                    posts.map((post) => ( <
                        li key = { post.id } > { post.title } < /li>
                    ))
                } <
                /ul>
            )
        } <
        /div>
);
}