import {useQuery} from "react-query";
import axios from "axios";

const fetchSuperheroes =()=>{
    return axios.get('http://localhost:4000/superheroes')
}
export const SuperheroesRQ = () => {
    // unique key , function, options - cachetime default is 5min (5 *60*1000)
   const {isLoading, data,isError, error,isFetching} = useQuery('super-heroes',fetchSuperheroes,{cacheTime:5000})

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>{error.message}</h2>
    return(
        <>
        <h2>Super heroes</h2>
            {data?.data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })}

        </>
    )
}