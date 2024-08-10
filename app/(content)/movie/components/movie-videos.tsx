import { API_URL } from "@/app/constants";

type MovieVideoProps = {
  id: string;
  name: string;
};

type VideoType = {
  site: string;
  name: string;
};
const getVideos = async (id: string) => {
  return await fetch(`${API_URL}/${id}/videos`).then((res) => res.json());
};

const MovieVideos = async ({ id, name }: MovieVideoProps) => {
  const videos: VideoType[] = await getVideos(id);
  return (
    <div>
      <h1>
        {name} {id}
      </h1>
      <div>
        {videos.map((video, i) => (
          <div key={i} className="py-2">
            <div>
              {video?.name} : {video.site}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieVideos;
