
import axios from "axios";
import {Link} from 'react-router-dom';
import {useSuperHeroesData,useAddSuperHeroData} from "../hooks/useSuperHeroesData";
import {useState,useEffect} from "react";


const onSuccess = (data) => {
   console.log("Success",data)
}

const onError = (err) => {
    console.log("Error ",err)
}
export const SuperheroesRQ = () => {
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')
    // unique key , function, options - cachetime default is 5min (5 *60*1000)
    const {isLoading, data,isError, error,isFetching,refetch} = useSuperHeroesData(onSuccess,onError,'http://localhost:4000/superheroes')
    const { mutate: addHero } = useAddSuperHeroData()

    const handleAddHeroClick = () => {
        const hero = { name, alterEgo }
        addHero(hero)
    }

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <h2>{error.message}</h2>
    return(
        <>
        <h2>Super heroes</h2>
            <div>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type='text'
                    value={alterEgo}
                    onChange={e => setAlterEgo(e.target.value)}
                />
                <button onClick={handleAddHeroClick}>Add Hero</button>
            </div>
        <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map(hero => {
                return <div key={hero.id}>
                    <Link to={`/hero/${hero.id}`}>{hero.name}</Link>
                </div>
            })}
            {/*{data.map(heroName => {*/}
            {/*    return <div key={heroName}>{heroName}</div>*/}
            {/*})}*/}
        </>
    )
}