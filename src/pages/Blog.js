import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Article from '../components/Article';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Blog = () => {

    const [content, setContent] = useState('')
    const [error, setError] = useState(false)
    const [bloData, setBlogData] = useState([])
    const [author, setAuthor]=useState('')

    // on appel l'api

    const getData = () => {
        axios.get(" http://localhost:3004/articles").then((res) => setBlogData(res.data))
    };


    useEffect(() => {
        getData();
    }, []
    )

    const handleSubmit = (e) => {
        // on previent les comportement par defaut du formulaire
        e.preventDefault();
        if (content.length < 140) {
            setError(true)
        } else {
            axios.post("http://localhost:3004/articles",{
                author,
                content,
                date: Date.now()
            })
            setAuthor("")
            setContent("")
            setError(false)

           
        }
       
        getData();
        window.location.reload();

    };
    return (
        <div className='blog-container'>
            <Logo />
            <Navigation />
            <h1>Blog</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type='text' placeholder='Nom' onChange={(e)=> setAuthor(e.target.value)} value={author} />
                <textarea
                    style={{ border: error ? "1px solid red" : "1px solid #61dafb" }}
                    placeholder='Message' onChange={(e) => setContent(e.target.value)} value={content}></textarea>
                {error && <p>Veuillez écrire un minimum de 140 caractere </p>}
                <input type='submit' value='Envoyer' />

            </form>

            <ul>
                {bloData.
                sort((a,b)=> b.date- a.date).
                map((article) => (
                <Article key={article.id} article={article}/>
                    ))}

            </ul>


        </div>
    );
};

export default Blog;