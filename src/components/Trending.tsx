import { useEffect } from 'react';
import store from '../store/movie.store';

interface MuvieResult {
  backdrop_path: string;
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
}

const Trending = () => {
  const { setMovies, movies } = store();

  useEffect(() => {
    setMovies();
  }, [setMovies]);

  return (
    <div className='bg-transparent-500 w-[80vw] mx-auto'>
      <div className='flex overflow-x-auto space-x-4 p-4 bg-transparent-700 scrollbar-hide'>
        {movies?.map((item: MuvieResult) => (
          <div
            className='card w-64 flex-shrink-0 bg-base-100 shadow-sm'
            key={item.id}
          >
            <figure>
              <img 
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
                alt={item.original_title} 
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{item.original_title}</h2>
              <p className='line-clamp-3'>{item.overview}</p>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary'>Watch Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trending;
