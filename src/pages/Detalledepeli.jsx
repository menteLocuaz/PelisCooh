import React from 'react';
import movie from '../movies.json';
import style from './Detallepeli.module.css';

export function Detalledepeli(){
    const imagenUrl="https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
        <div className={style.detalleConteiner}>
            <img className={style.col} src={imagenUrl} alt={movie.title} />
            <div className={style.col}>
                <p>Titulo:{movie.title}</p>
                {/* <p>{movie.genre_ids.map((genero)=>genero.name).join(', ')}</p> */}
                <p>Descricion:{movie.overview}</p>
            </div>
        </div>
    )
}
