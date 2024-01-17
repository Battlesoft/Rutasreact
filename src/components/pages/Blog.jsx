import React from 'react';
import { useFetch } from 'use-http';
import { useSearchParams } from 'react-router-dom';

const Blog = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    const { data, error, loading} = useFetch("https://rickandmortyapi.com/api/character");

    const handleChange = (e) =>{
        setSearchParams({[e.target.name]: e.targer.value})
    }

    if(loading) return (<h1>Buscando el Morty adecuado...</h1>)
    if(error) return (<h1>La pistola de portales no funciona...</h1>)

    console.log(data.results);
    return (
        <>
            <input
                type='text'
                name='filter'
                onChange={handleChange}
                className='form-control my-3'
                alt='Buscador'
                value={searchParams.get("Filter") || ""}
            
            
            ></input>

            <h1>Blog - Elije tu eprsonaje favorito</h1>
            <ul className="list-group">
                {
                    data.results.map(item => {
                        return (
                            <link className="list-group-item"
                            key={item.id}
                            to={'/blog/$(item.id)'}>{item.name} </link>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Blog