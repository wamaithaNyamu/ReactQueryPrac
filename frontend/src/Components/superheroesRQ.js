import {useQuery} from "react-query";
import axios from "axios";

const fetchSuperheroes =()=>{
    return axios.get('http://localhost:4000/superheroes')
}

const onSuccess = (data) => {
   console.log("Success",data)
}

const onError = (err) => {
    console.log("Error ",err)
}
export const SuperheroesRQ = () => {
    // unique key , function, options - cachetime default is 5min (5 *60*1000)
   const {isLoading, data,isError, error,isFetching,refetch} = useQuery('super-heroes',fetchSuperheroes,
       {
           // cacheTime:5000,
           // refetching wait time
           // staleTime:30000,
           // refetchOnMount: true,
           // refetchOnWindowFocus:true,
           // refetchInterval:2000,
           // enabled set to false means the component wont fetch on mount
           // enabled:false
           // onsuccess and on error call backs
           // onSuccess,
           // onError


       })

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>{error.message}</h2>
    return(
        <>
        <h2>Super heroes</h2>
        <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })}

        </>
    )
}