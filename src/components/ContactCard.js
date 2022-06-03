import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, email, capacity, c_box, image} = props.contact;
    return (
        <div className="item" id={id}>
            <img className="ui avatar image " src={user} alt="user" />
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
                    <div>{capacity}</div>
                    <div>{c_box}</div>
                    <div>{image}</div>
                </div>
                <i className="trash alternate outline icon"
                style={{color:"red", marginTop:"7px", marginLeft:"10px"}}
                onClick = {() => props.clickHandler(id)}></i>
                <i className="bi bi-pen"
                style={{color:"blue", marginTop:"7px", marginLeft:"10px"}}
                onClick = {() => props.editHandler(id)}></i>
            
        </div>
    );

}

export default ContactCard;