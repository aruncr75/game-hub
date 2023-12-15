import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";

export interface Game{
    id:number;
    slug:string;
    name:string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic: number;
    rating_top: number;
    description_raw :string; 
}

const apiClient =new APIClient<Game>('/games')
  const useGames =()=> {
    const gameQuery = useGameQueryStore(s=> s.gameQuery)

   return useInfiniteQuery<FetchResponse<Game>,Error>({
      queryKey:['games',gameQuery],
      queryFn:({pageParam =1}) => apiClient.getAll({params:{
        genres:gameQuery.genreId,
        parent_platforms:gameQuery.platformId,
        ordering:gameQuery.sortOrder,
        search:gameQuery.searchText,
        page:pageParam,
    }}),
    staleTime:20*60*60*1000,
    getNextPageParam:(lastPage,allPages)=>
    {
      return lastPage.next? allPages.length +1 :undefined;
    }
    })
  }
 

 

 export default useGames