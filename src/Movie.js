import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import './Movie.css';

function Movie({title, poster, genres, synopsis, url}){
    return (
      <div className="Movie">
        <div className="Movie__Columns">
          <MoviePoster poster={poster} alt={title}/>
        </div>
        <div className="Movie__Columns">
          <h1>title:{title}</h1>
          <h3>url:{url}</h3>
          <div className="Movie__Genres">
              genres:{genres.map((genre, index)=><MovieGenre genre={genre} key={index}/>)}
          </div>
          <p className="Movie__Synopsis">
            synopsis:{synopsis}
          </p>
        </div>
      </div>
    )
}
function MoviePoster({poster, alt}){
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}
function MovieGenre({genre}){
    return(
      <span className="Movie__Genre">{genre}</span>
    )
}
MovieGenre.propTypes={
  genre:PropTypes.string.isRequired
}
Movie.propTypes = {
  title:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres:PropTypes.array.isRequired,
  synopsis:PropTypes.string.isRequired
}
MoviePoster.propTypes = {
  poster:PropTypes.string.isRequired,
  alt:PropTypes.string.isRequired
}

export default Movie;
