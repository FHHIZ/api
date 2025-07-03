import { useEffect, useState } from "react"

const Trending = () => {
    const [data, setData] = useState<Movie>();

    useEffect(() => {
        const fetchData = async () =>
            try {
                const response = await fetch(
                    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
                    {
                        method: "GET",
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYWI1MDI4M2VlMTA5NjU4ODBmYmEyYzBmODBkNmQ4ZSIsIm5iZiI6MTczNjkyNzMxNC4zMzYsInN1YiI6IjY3ODc2ODUyNjJlOGZhNjI5ZGJiMzYyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pMvATR728aR0qrB0Eb2yrslwq-54rnrNF76H7iXp3PY'
                        }
                    }
                )
            }
    })







  return (
    <div className='block p-10 bg-transparent-50'>
      <h1 className='text-3xl font-black text-dark text-auto'>Trending Now</h1>
        <div className="flex w-[80vw] mx-auto overflow-x-auto space-x-4">
            <div className="carousel-item m-10 block">
            <img
                src="2"
                className="rounded-box w-66 h-99" />
            </div>
            <div className="carousel-item m-10 block">
            <img
                src=""
                className="rounded-box w-66 h-99" />
            </div>
            <div className="carousel-item m-10 block">
            <img
                src=""
                className="rounded-box w-66 h-99" />
            </div>
            <div className="carousel-item m-10 block">
                <img
                src=""
                className="rounded-box w-66 h-99" />
            </div>
            <div className="carousel-item m-10 block">
                <img
                src=""
                className="rounded-box w-66 h-99" />
            </div>
            <div className="carousel-item m-10 block">
                <img
                src=""
                className="rounded-box w-66 h-99" />
            </div>
            <div className="carousel-item m-10 block">
                <img
                src=""
                className="rounded-box w-66 h-99" />
            </div>
            <div className="carousel-item m-10 block">
                <img
                src=""
                className="rounded-box w-66 h-99" />
            </div>
            <div className="carousel-item m-10 block">
                <img
                src=""
                className="rounded-box w-66 h-99" />
            </div>
            <div className="carousel-item m-10 block">
                <img
                src=""
                className="rounded-box w-66 h-99" />
            </div>
        </div>
    </div>
  )
}

export default Trending
