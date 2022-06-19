
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCar, faGamepad, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import "./header.css";
import { HeaderSearch } from "../headerSearch/HeaderSearch";


export const Header = ({type}) => {
    
    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faGamepad} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {type !== "list" && <><h1 className="headerTitle">A lifetime of discounts? it's a Genius</h1>
                    <p className="headerDesc">
                        Get rewarded for your travels - Unlock instant savings of 10% or more
                        with a free booking account
                    </p>
                    <button className="headerBtn">Sign in / Register</button>
                    <HeaderSearch />
                    </>
                }
            </div>
        </div>
    )
}
