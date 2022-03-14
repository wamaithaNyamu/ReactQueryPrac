import {useQuery,useMutation ,useQueryClient} from "react-query";
// import axios from "axios";
import axios from 'axios'
// import { request } from '../utils/axios-utils'

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
            // select : (data) => {
            //     const superHeroNames = data.data.map((hero) => hero.name);
            //     return superHeroNames
            // },


        })
}
const addSuperHero = hero => {
    return axios.post('http://localhost:4000/superheroes', hero)
    // return request({ url: '/superheroes', method: 'post', data: hero })
}

export const useAddSuperHeroData = () => {
    // const queryClient = useQueryClient()

    return useMutation(addSuperHero)
        // , {
        // onSuccess: data => {
        //   /** Query Invalidation Start */
        //   // queryClient.invalidateQueries('super-heroes')
        //   /** Query Invalidation End */

        //   /** Handling Mutation Response Start */
        // queryClient.setQueryData('super-heroes', oldQueryData => {
        //   return {
        //     ...oldQueryData,
        //     data: [...oldQueryData.data, data.data]
        //   }
        // })
        //   /** Handling Mutation Response Start */
        // },
        // /**Optimistic Update Start */
        // onMutate: async newHero => {
        //     await queryClient.cancelQueries('super-heroes')
        //     const previousHeroData = queryClient.getQueryData('super-heroes')
        //     queryClient.setQueryData('super-heroes', oldQueryData => {
        //         return {
        //             ...oldQueryData,
        //             data: [
        //                 ...oldQueryData.data,
        //                 { id: oldQueryData?.data?.length + 1, ...newHero }
        //             ]
        //         }
        //     })
        //     return { previousHeroData }
        // },
        // onError: (_err, _newTodo, context) => {
        //     queryClient.setQueryData('super-heroes', context.previousHeroData)
        // },
        // onSettled: () => {
        //     queryClient.invalidateQueries('super-heroes')
        // }
        // /**Optimistic Update End */
    // })
}