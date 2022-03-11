import {useQuery} from "react-query";
import axios from "axios";

const fetchSuperheroes =()=>{
    return axios.get('http://localhost:4000/superheroes')
}
export const SuperheroesRQ = () => {
    // unique key
   const {isLoading, data} = useQuery('super-heroes',fetchSuperheroes)

    if (isLoading) return <h2>Loading...</h2>
    return(
        <>
        <h2>Super heroes</h2>
            {data?.data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
            })}

        </>
    )
}