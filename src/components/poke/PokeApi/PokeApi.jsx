import './PokeApi.css'
import { ApiContext } from '../../../App'
import { createContext, useContext, useEffect, useState } from 'react'
import { Pokemon } from '../Pokemon/Pokemon'
import { AbilityCard } from '../AbilityCard/AbilityCard'

export const PokemonContext = createContext()

export const PokeApi = () => {

    const {VITE_POKEMONS} = import.meta.env

    const {page} = useContext(ApiContext)

    const [pokemons , setPokemons] = useState(null)

    const [pokemonSelected , setPokemonSelected] = useState('')

    const [abilitySelected , setAbilitySelected] = useState('')

    const [showAbility , setShowAbility] = useState([])

    let dataRequest = async () =>{

        let controller = new AbortController()
        let options = {
            method : 'get',
            signal: controller.signal
        }

        await fetch( VITE_POKEMONS , options)
        .then(res => res.json())
        .then(data => setPokemons(data) )
        .catch(err => console.log(err))
        .finally(() => controller.abort())

    }
    
    useEffect( () => {
        dataRequest()
    }, [])

    return(
        <PokemonContext.Provider value={{setPokemonSelected , pokemonSelected , abilitySelected, setAbilitySelected , showAbility , setShowAbility}}>
        <>
        <main className={`Main ${page === 3 ? `isActive` : ``}`}>
            {!pokemons && <p className='Poke-paragraph'>Loading Pokemons...</p>}
            <ul className="Poke-grid">
            {pokemons && pokemons.results.map(eachPokemon => 
                <Pokemon key={eachPokemon.name} {...eachPokemon}/>
            )}
            </ul>
            <AbilityCard/>
        </main>
        </>
        </PokemonContext.Provider>
    )
}



