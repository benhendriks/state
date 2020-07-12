import React,{useContext} from 'react';
import {MovieContext} from './MovieContext';


const Nav = () => {
  const [movies,setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Ben</h3>
      <h5>The list of Movie: {movies.length}</h5>
    </div>
  );
}

export default Nav;
