import { Metadata, ResolvedMetadata, ResolvingMetadata } from "next";
import Head from "next/head";
import { API_URL } from "../page";
import { Suspense } from "react";
import MovieInfo, { MovieType, getMovies } from "../components/movie-info";
import MovieVideos from "../components/movie-videos";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    [key: string]: string | string[];
  };
};

export const generateMetadata = async ({
  params,
  searchParams,
}: Props): Promise<Metadata> => {
  const movie: MovieType = await getMovies();
  return { title: String(searchParams.name) };
};

export const getMovie = async (id: string) => {
  return await fetch(`${API_URL}/${id}`).then((res) => res.json());
};

const ProductDetail = async ({ params, searchParams }: Props) => {
  const movie = await getMovie(params.id);

  return (
    <div className="flex">
      <Suspense fallback={<div>Loading...</div>}>
        <MovieInfo />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieVideos id={params.id} name={String(searchParams.name)} />
      </Suspense>
      <div>
          <h1>{movie?.title}</h1>
          <div>{movie?.overview}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
