import {useQuery} from "react-query";
import axios from "axios";


export const useSuperHeroesData = (onSuccess,onError,url) =>{
    return useQuery('super-heroes',()=>{
            return axios.get(url)
        }
        ,
        {
            // cacheTime:5000,
            // refetching wait time
            // staleTime:30000,
            // refetchOnMount: true,
            // refetchOnWindowFocus:true,
            // refetchInterval:2000,
            // enabled set to false means the component wont fetch on mount
            // enabled:false,
            // onsuccess and on error call backs
            onSuccess,
            onError,
            //    select and filter
            select : (data) => {
                const superHeroNames = data.data.map((hero) => hero.name);
                return superHeroNames
            },


        })
}