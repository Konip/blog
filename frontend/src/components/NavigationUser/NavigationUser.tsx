import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../../store/authActionTypes"
import { openPopUp } from "../../store/modalActionTypes"
import "./NavigationUser.scss"

interface NavigationUserProps {
    auth: boolean
    fullName: string
}

const NavigationUser: React.FC<NavigationUserProps> = ({ auth, fullName }) => {

    const dispatch = useDispatch()

    const openLogin = () => {
        dispatch(openPopUp("login"))
    }
    const openSignup = () => {
        dispatch(openPopUp("signUp"))
    }
    const log = () => {
        dispatch(logout())
    }

    return (
        <div className="navigation-user-profile">
            {!auth
                ?
                <div className="navigation-user-container">
                    <div className="navigation-user-login btn-transparent" onClick={openLogin}>Login</div>
                    <div className="navigation-user-register btn-black" onClick={openSignup}>Register</div>
                </div>
                :
                <div className="navigation-user-container">
                    <Link className="navigation-user-link" to={"profile"}>
                        <img className="navigation-user__avatar-image"
                            src="https://images.vector-images.com/clp2/231269/clp3613252.jpg" alt="" />
                    </Link>
                    <div className="navigation-user-details">
                        <div>{fullName}</div>
                    </div>
                    <div className="navigation-user-register btn-black" onClick={log}>Logout</div>
                </div>
            }

        </div >
    )
}
export default NavigationUser