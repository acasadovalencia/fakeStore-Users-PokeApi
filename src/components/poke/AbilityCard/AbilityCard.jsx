import './AbilityCard.css'
import { useContext } from 'react'
import { PokemonContext } from '../PokeApi/PokeApi'

export const AbilityCard = () => {

    const {abilitySelected , setAbilitySelected, showAbility , setShowAbility} = useContext(PokemonContext)

    return(
        <>
        {abilitySelected && showAbility &&
            <div className='Ability-wrapper'>
                <div className='Ability-card'>
                    <svg onClick={() => setAbilitySelected('')} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Ability-close" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                    <h2 className='Poke-h2 Poke-h2--ability'>{abilitySelected}</h2>
                    <p className="Poke-paragraph">{showAbility && showAbility.effect_entries && showAbility.effect_entries[1] && showAbility.effect_entries.find(each => each.language.name === 'en').effect}</p>
                </div>
            </div>
        }
        </>
    )
}
