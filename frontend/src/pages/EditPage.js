import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function EditPage({patient}) {
    const [name, editName]                       = useState(patient.name);
    const [collectionDate, editCollectionDate]   = useState(patient.collectionDate.slice(0,10));
    const [bloodType, editBloodType]             = useState(patient.bloodType);
    const [bloodSugar, editBloodSugar]           = useState(patient.bloodSugar);
    const [triglycerides, editTriglycerides]     = useState(patient.triglycerides);

    const navigate = useNavigate();

    const editPatient = async () => {
        
        const response = await fetch(`/log/${patient._id}`, {
            method: 'put',
            body: JSON.stringify({
                name: name,
                collectionDate: collectionDate,
                bloodType: bloodType,
                bloodSugar: bloodSugar,
                triglycerides: triglycerides
            }),
            headers: {
                'Content-Type': 'application/json',
        },
    });
    if((response.status === 200) || (response.status === 204)){
        alert(`Patient edited successfully.`);
        navigate("/log");
    } else {
        alert(`ERROR: Patient NOT edited. status code = ${response.status}`);
        navigate("/log");
    }

};
    
    return (
        <>
        <article>
            <h2>Edit a Patient's Information</h2>
            <p>Use the form below to edit an existing patient. Make sure to fill out all fields.</p>
            <form onSubmit={(e) => {e.preventDefault();}}>
                <table>
                    <tr className="addPatient">
                        <td><label for="name">First & Last Name</label>
                        <input required type='text' placeholder="First Last" value={name} onChange={e => editName(e.target.value)} id="name"/></td>
                        <td><label for="date">Collection Date</label>
                        <input required type="date" value={collectionDate} onChange={e => editCollectionDate(e.target.value)} id="date"/></td>
                        <td><label for="bloodType">Blood Type</label>
                        <select required defaultValue={bloodType} name="bloodType" id="bloodType" onChange={e => editBloodType(e.target.value)}>
                            <option value="O-" selected="selected">O-</option>
                            <option value="O+">O+</option>
                            <option value="A-">A-</option>
                            <option value="A+">A+</option>
                            <option value="B-">B-</option>
                            <option value="B+">B+</option>
                            <option value="AB-">AB-</option>
                            <option value="AB+">AB+</option>
                            <option value="Rare Blood">Rare Blood</option>
                        </select></td>
                        <td><label for="bloodSugar">Blood Sugar</label>
                        <input required type="text" placeholder="mg/dL" value={bloodSugar} onChange={e => editBloodSugar(e.target.value)} id="bloodSugar"/></td>
                        <td><label for="triglycerides">Triglycerides</label>
                        <input required type="text" placeholder="mg/dL" value={triglycerides} onChange={e => editTriglycerides(e.target.value)} id="triglycerides"/></td>
                        
                    </tr>
                </table>
                <label for="submit">
                        <button type="submit" onClick={editPatient} id="submit">Save</button>
                </label>
            </form>
        </article>
        </>
    );
}
export default EditPage;