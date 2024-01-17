import { Dropdown } from "react-bootstrap"
export default function UserDropDown(props){
    return(
        <Dropdown className="nav-item nav-link me-3 me-lg-0">
            <Dropdown.Toggle variant="link" id="dropdown-basic">
            {props.username}
            </Dropdown.Toggle>
    
            <Dropdown.Menu>
                <Dropdown.Item onClick={props.logOut}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
    
}