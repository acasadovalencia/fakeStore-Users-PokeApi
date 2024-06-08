import { useContext } from 'react'
import './Header.css'
import { ApiContext } from '../../App' 

export const Header = () => {

    const {page , setPage} = useContext(ApiContext)

    return(
        <>
        <header className="Header">
            <button className="Header-btn Header-btn--random" onClick={() => {setPage(1)}}>Random User</button>
            <button className="Header-btn Header-btn--fake" onClick={() => setPage(2)}>Fake Store</button>
            <button className="Header-btn Header-btn--poke" onClick={() => setPage(3)} >PokeAPI</button>
        </header>
        </>
    )
}