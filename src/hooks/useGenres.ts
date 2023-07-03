import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

// becomes generic
const useGenres = () => useData<Genre>('/genres')

export default useGenres;
