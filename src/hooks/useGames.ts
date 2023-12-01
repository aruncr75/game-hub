import { useEffect, useState } from "react"
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";
export interface Platform{
    id:number;
    name:string;
    slug:string;
    
}
export interface Games{
    id:number;
    name:string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic: number;
}

 
  const useGames = (gameQuesry:GameQuery) => 
    useData<Games>('/games' ,{params:{
        genres:gameQuesry.genre?.id,
        platforms:gameQuesry.platform?.id,
        ordering:gameQuesry.sortOrder,
        search:gameQuesry.searchText,
    }} ,[gameQuesry])

 

 export default useGames
 