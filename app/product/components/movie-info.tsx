import Link from "next/link";
import { API_URL } from "../page";
import { error } from "console";

export type MovieType = {
  id: number;
  title: string;
};

export const getMovies = async () => {
  return await fetch(API_URL).then((res) => res.json());
};

const MovieInfo = async () => {
  const movies: MovieType[] = await getMovies();
  return (
    <div>
      <ul>
        <h1>Movie List</h1>
        {movies.map((movie, i) => (
          <li key={i} className="py-2 hover:text-blue-500">
            <Link href={`/product/${movie.id}?name=${movie.title}`}>
              {i} :{movie?.title} {movie?.id}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieInfo;
