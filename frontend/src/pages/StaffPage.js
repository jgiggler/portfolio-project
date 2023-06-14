import React, { useState } from "react";
import StaffRow from "../components/StaffRow";

function StaffPage() {
    const [results, setResults] = useState([]);
    const getStaff = () => {
        fetch("https://randomuser.me/api/?results=10")
        //if API is working then create json out of staff
            .then((staffList) => staffList.json())
            .then((staffList) => {
                setResults(staffList.results);
            })
            .catch(() => {
                alert("The API seems to not be working right now. Try again later.")
            });
    };
    return (
        <>
            <h2>Staff List</h2>
            <article>
            <p >This page is used to populate a table with randomly generated people using a <a href="https://randomuser.me">Random User Generator</a> API. 
                The 2 buttons below can be used to make a call to the API through the browser or through the server respectively. Once the data is found, it
                gets dynamically added to the table.
            </p>

        <p className="person_API">Generate Staff List</p>
        <p className="buttons_for_staff"><button id="StaffButton" value="add 10" onClick={getStaff}>
        Add 10 staff members
        </button></p>
        
        
        
            
            <table>
                <thead>
                    <tr>
                        <td className="staff_table_head_begin">Portrait</td>
                        <td className="staff_table_head">Name &amp; Email</td>
                        <td className="staff_table_head">Telephone</td>
                        <td className="staff_table_head_end">City</td>
                    </tr>
                </thead>

                <tbody id="randomPerson">
                    {results.map((person, index) => <StaffRow person={person} key={index} />)}
                </tbody>
            </table>
            </article>
        
        </>
    );
}

export default StaffPage;