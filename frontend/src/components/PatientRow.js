import React from "react";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import { MdBloodtype } from "react-icons/md";

function PatientRow({person, updateLog, deleteLog}) {
    return(
        <tr>
            
            <td title="Name of Patient">{person.name}</td>
            <td title="Date of blood Collection">{person.collectionDate.slice(0,10)}</td>
            <td title="Blood type of patient"><i id="bloodTypeIcon"><MdBloodtype/></i>{person.bloodType}</td>
            <td title="Blood sugar levels of patient as mg/dL ">{person.bloodSugar}</td>
            <td title="Amount of triglycerides in blood as mg/dL">{person.triglycerides}</td>
            <td><i><AiTwotoneDelete onClick={() => deleteLog(person._id)} title="Remove the patient from the table."/></i></td>
            <td><i><AiFillEdit onClick={() => updateLog(person)} title="Clicking this icon will allow you to edit a patients information on a new screen. "/></i></td>
        </tr>
    );
}

export default PatientRow;