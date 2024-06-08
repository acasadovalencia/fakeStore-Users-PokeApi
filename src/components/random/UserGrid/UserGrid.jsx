import { useContext, useState } from 'react'
import {UserContext} from '../RandomUser/RandomUser'
import './UserGrid.css'

export const UserGrid = (props) =>{

    const {name , picture, login} = props

    const {setUserSelected} = useContext(UserContext)

    return(
        <>
        <picture className="Users-picture" onClick={() => setUserSelected(login.uuid)}>
            <img src={picture.medium} alt={`${name.first} photo`} className="Users-img" loading='lazy'/>
        </picture>
        </>
    )
} 