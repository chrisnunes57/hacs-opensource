import React from "react";
import "./AdminPage.scss";

function UserEdit(props) {
    if (!props.member) {
        return (<span></span>);
    }
    return (
        <div className="userEdit">
            <p>{props.member.name} - <span className="subtitle">{props.member.role}</span></p>
        </div>
    );
}

export default UserEdit;