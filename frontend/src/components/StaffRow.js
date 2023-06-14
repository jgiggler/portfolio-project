import React from "react";

function StaffRow({person}) {
    return(
        <tr>
            <td><img src={person.picture.thumbnail} alt="Random Person" /></td>
            <td>
                <a href="mailto: {person.email}">
                {person.name.first}
                {person.name.last}
                </a>
            </td>
            <td>{person.phone}</td>
            <td>{person.location.city}</td>
        </tr>
    );
}

export default StaffRow;