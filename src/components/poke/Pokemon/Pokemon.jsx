import './Pokemon.css'
import { useState, useEffect, useContext } from 'react'
import { v4 as uuidv4} from 'uuid'
import { PokemonContext } from '../PokeApi/PokeApi'

export const Pokemon = (props) =>{

    const {VITE_POKEMON} = import.meta.env

    const {name} = props

    const [pokemon, setPokemon] = useState(null)

    let dataRequest = async () =>{

        let controller = new AbortController()
        let options = {
            method: 'get',
            signal: controller.signal
        }

        await fetch(`${VITE_POKEMON}${name}/` , options)
        .then(res => res.json())
        .then( data => setPokemon(data))
        .catch(err => console.log(err))
        .finally(() => controller.abort())

    }

    useEffect(() => {
        dataRequest()
    }, [])

    return(
        <>
        <li className='Poke-li'>
            <picture className="Poke-picture">
                {pokemon &&  <img src={pokemon.sprites.other.dream_world.front_default} alt={name} className="Poke-img" loading='lazy' /> }
            </picture>
            <div className="Poke-wrapper">
                <div className="Poke-name">
                    <h2 className="Poke-h2">{name}</h2>{pokemon && <span className='Poke-span Poke-span--id'># {pokemon.id}</span>}
                </div>
                <div className="Poke-type">
                    {pokemon && pokemon.types.map(eachType =>
                    <PokeType key={eachType.type.name} {...eachType}/> 
                    ) }
                </div>
                <h3 className="Poke-h3">Abilities</h3>
                <div className="Poke-abilities">
                    {pokemon && pokemon.abilities.map(eachAbility =>
                        <PokeAbilities key={uuidv4()} {...eachAbility}/>
                    )}
                </div>
                <h3 className="Poke-h3">Characteristics</h3>
                <div className="Poke-description">
                    <span className='Poke-span Poke-span--description'>{pokemon && pokemon.weight} Kgs</span>
                    <span className='Poke-span Poke-span--description'>{pokemon && pokemon.height} Inches</span>
                </div>
            </div>
            <div className="Poke-hp">
                <span className='Poke-span Poke-span--hp'>HP: { pokemon && pokemon.stats[0].base_stat}</span>
            </div>
        </li>
        </>
    )
}

const PokeType = (props)=>{

    const {type} = props

    return(
        <>
        <span className={`Poke-span Poke-span--type ${type.name}`}>{type.name}</span>
        </>
    )
}

const PokeAbilities = (props)=>{

    const {ability} = props

    const {VITE_ABILITY} = import.meta.env

    const {abilitySelected , setAbilitySelected , setShowAbility } = useContext(PokemonContext)

    const showHability = (abilityName)=>{
    
        setAbilitySelected(abilityName)

        let controller = new AbortController()
        let options = {
             method: 'get',
             signal: controller.signal
         }

         fetch(`${VITE_ABILITY}${abilityName}`, options)
         .then(res => res.json())
         .then(data => setShowAbility(data))
         .catch(err => console.log(err))
         .finally(() => controller.abort())
    }

    return(
        <>
        <span onClick={()=> showHability(ability.name)} className='Poke-span Poke-span--ability'>{ability.name}</span>
        </>
    )
}
