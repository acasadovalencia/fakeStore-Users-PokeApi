import { useEffect, useState, createContext, useContext } from 'react'
import './RandomUser.css'
import { UserGrid } from '../UserGrid/UserGrid'
import { User } from '../User/User'
import { ApiContext } from '../../../App'

export const UserContext = createContext()

export const RandomUser = () => {

    const {VITE_USERS} = import.meta.env

    const {page} = useContext(ApiContext)

    const [users , setUsers] = useState()

    const [userSelected , setUserSelected] = useState(``)

    let dataRequest = async () => {
        let controller = new AbortController()
        let options = {
            method : 'get',
            signal : controller.signal,
        }
        await fetch( VITE_USERS , options )
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
        .catch(err => console.log(err))
        .finally(() => controller.abort())
    }
    
    useEffect( () => {
        dataRequest()
    }, [])

    return(
        <>
            <main className={`Main ${page === 1 ? `isActive` : ``}`} >
                <UserContext.Provider value={{setUserSelected , userSelected}}>
                <h2 className='Users-h2' >Select an user below:</h2>
                <div className="Users-grid">
                    {!users && <p className='Users-paragraph'>No users to show...</p>}
                    {users && users.results.map(eachUser => 
                        <UserGrid key={eachUser.login.uuid} {...eachUser} />
                    )}
                </div>
                    {users && users.results.map(eachUser => 
                        <User key={eachUser.login.uuid} {...eachUser} />
                    )}
                </UserContext.Provider>
            </main>
        </>
    )
}


