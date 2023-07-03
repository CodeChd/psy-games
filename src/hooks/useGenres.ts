import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// becomes generic
const useGenres = () => useData<Genre>('/genres')

export default useGenres;
