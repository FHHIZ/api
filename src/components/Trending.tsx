import React, { useEffect } from 'react'
import store from '../store/movie.store';

interface MuvieResult {
        backdrop_path: string;
        id: number;
        original_title: string;
        poster_path: string;
        overview: string;
    }

const Trending = () => {
    const { setMovies, movies } = store ();

    useEffect(() => {
        setMovies();
    }, []);

  return (
    <div className='flex items- center justify-center p-4 flex-warp gap-4 w-[80-vw] overflow-x-auto'>
        {movies?.map((item: MuvieResult, index: number) => (
            <div className='card bg-base w-96 shadow-sm' key={index}>
                <figure>
                    <img 
                    src={'https://image.tmdb.org/t/p/w500' + item.poster_path} 
                    alt="" />
                </figure>
                <div className='card-body'>
                    <h2 className='card-title'>{item.original_title}</h2>
                    <p>{item.overview}</p>
                    <div className='card-action justify-end'>
                        <button className='btn btn-primary'>Watch Now</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Trending
