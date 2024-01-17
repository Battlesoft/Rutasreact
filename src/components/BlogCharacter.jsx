import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "use-http";

const BlogCharacter = () => {
    const params = useParams();
    const url = `https://rickandmortyapi.com/api/character/${params.id}`;
    const { data, loading, error } = useFetch(url);

    if (loading) return (<h1>Buscando el Morty adecuado...</h1>);
    if (error) return (<h1>La pistola de portales no funciona...</h1>);

    return (
        <div className="card">
            <img src={data.image} className="card-image-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.species}</p>
            </div>
        </div>
    );
}

export default BlogCharacter;