import React from "react";
import Movies from "../movies.json";
import { Peliscard } from "./pelisCard";
import style from "./moviegrid.module.css";


export function Moviesgrid (){
    
        return (
          // <ul>
          //   <li>peli 1</li>
          //   <li>peli2</li>
          //   <li>peli 3</li>
          // </ul>
        <ul className={style.moviegrid}>
        {Movies.map((pelicula) => 
        //  <li key={peliculas.id} >{peliculas.title} </li>
        //  <peliscard key={peliculas.id}>{peliculas.title}</peliscard>
         <Peliscard key={pelicula.id} movie={pelicula}   />
        // <peliscard/>

        )}
            
        </ul>
    
        );
    
};
