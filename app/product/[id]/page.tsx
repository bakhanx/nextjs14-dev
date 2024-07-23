import { Metadata, ResolvedMetadata, ResolvingMetadata } from "next";
import Head from "next/head";
import { Suspense } from "react";
import MovieInfo, { MovieType, getMovies } from "../components/movie-info";
import MovieVideos from "../components/movie-videos";
import { API_URL } from "@/app/constants";
import Button from "@/components/button";

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
    <div className="flex gap-x-4 divide-x-2">
      <Suspense fallback={<div>Loading...</div>}>
        <MovieInfo />
      </Suspense>
      <div className="flex flex-col pl-2">
        <Suspense fallback={<div>Loading...</div>}>
          <MovieVideos id={params.id} name={String(searchParams.name)} />
        </Suspense>
        {/* Detail Content */}
        <div>
          <h1>{movie?.title}</h1>
          <div>{movie?.overview}</div>
        </div>

        {/* Button */}
        <div className="flex gap-x-2 mt-4">
          <Button name="Purchase" />
          <Button name="Cart" />
        </div>
      </div>
    </div>
  );
};



export default ProductDetail;
