import style from "./peliCard.module.css";
import { Link } from "react-router-dom";

export function Peliscard ({movie}){
    const imagenUrl="https://image.tmdb.org/t/p/w300" + movie.poster_path
    
return (
  <li className={style.movieCard}>
  <Link to={"/Movie/"+ movie.id}>
       <img className={style.peliImagen} src={imagenUrl} alt={movie.title} />
       <br />
     
     <div>{movie.title}</div>
  </Link>
       </li>
);
       
};

