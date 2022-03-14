import {useQuery, useQueryClient} from "react-query";
import axios from "axios";

const fetchSuperhero = ({queryKey}) => {
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)

}
export const useSuperHeroData = (heroId) =>{
    const queryClient = useQueryClient()

        return useQuery(['super-hero',heroId],fetchSuperhero,
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
            // onSuccess,
            // onError,
            //    select and filter
            // select : (data) => {
            //     const superHeroNames = data.data.map((hero) => hero.name);
            //     return superHeroNames
            // },

            initialData: () => {
                const hero = queryClient.getQueryData('super-heroes')?.data?.find((hero) => hero.id === parseInt(heroId))
                if (hero){
                    return {data:hero}
                } else {
                    return undefined
                }

            }


        })
}