import { UserContext } from '../RandomUser/RandomUser'
import './User.css'
import { useContext, useState } from 'react'

export const User = (props) => {

    const {picture, name, login , email, dob, location , phone} = props

    const {userSelected , setUserSelected} = useContext(UserContext)

    const [info , setInfo] = useState(`name`)

    return(
        <>
        <div className={`Users-card ${userSelected == login.uuid ? `isActive` : ``}`}>
            <div className="Card-wrapper">
                <svg onClick={() => setUserSelected(``)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="User-close" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
                <picture className="User-picture">
                    <img src={picture.large} alt={name} className="User-img" />
                </picture>
                <span className={`User-span ${info ? `isActive` : ``}`}>My {info} is </span>
                <UserInfo name={name} login={login} email={email} dob={dob} location={location} phone={phone} info={info}/>
                <IconsUl setInfo={setInfo} info={info}/>
            </div>
        </div>
        </>
    )
}

const UserInfo = (props) =>{

    const {name , email, dob, location, phone , login, info} = props

    return(
        <div className="User-info">
                <ul className="User-ul">
                    <li className="User-li">
                        <h3 className={`User-h3 Name ${info == `name` ? `isActive` : ``}`}>{name.title}. {name.first} {name.last}</h3>
                    </li>
                    <li className={`User-li`}>
                        <h3 className={`User-h3 Name ${info == `email` ? `isActive` : ``}`}>{email}</h3>
                    </li>
                    <li className="User-li">
                        <h3 className={`User-h3 Name ${info == `age` ? `isActive` : ``}`}>{dob.age} years</h3>
                    </li>
                    <li className="User-li">
                        <h3 className={`User-h3 Name ${info == `country` ? `isActive` : ``}`}>{location.country}</h3>
                    </li>
                    <li className="User-li">
                        <h3 className={`User-h3 Name ${info == `phone` ? `isActive` : ``}`}>{phone}</h3>
                    </li>
                    <li className="User-li">
                        <h3 className={`User-h3 Name ${info == `password` ? `isActive` : ``}`}>{login.password}</h3>
                    </li>
                </ul>
        </div>
    )
}

const IconsUl = (props) => {

    const {setInfo, info} = props

    return(
            <ul className="Icons-ul">
                <li className={`Icons-li ${info == `name` ? `isActive` : ``}`} onMouseOver={() => setInfo(`name`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Icon-svg" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg> 
                </li>
                <li className={`Icons-li ${info == `email` ? `isActive` : ``}`} onMouseOver={() => setInfo(`email`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Icon-svg" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                    </svg>
                </li>
                <li className={`Icons-li ${info == `age` ? `isActive` : ``}`} onMouseOver={() => setInfo(`age`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Icon-svg" viewBox="0 0 16 16">
                        <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23"/>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                    </svg>
                </li>
                <li className={`Icons-li ${info == `country` ? `isActive` : ``}`} onMouseOver={() => setInfo(`country`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Icon-svg" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                </li>
                <li className={`Icons-li ${info == `phone` ? `isActive` : ``}`} onMouseOver={() => setInfo(`phone`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Icon-svg" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                    </svg>
                </li>
                <li className={`Icons-li ${info == `password` ? `isActive` : ``}`} onMouseOver={() => setInfo(`password`)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="Icon-svg" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"/>
                    </svg>
                </li>
            </ul>
    )
}