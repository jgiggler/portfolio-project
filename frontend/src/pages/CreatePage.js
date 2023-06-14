import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function CreatePage() {
    const [name, setName]                       = useState('');
    const [collectionDate, setCollectionDate]   = useState('');
    const [bloodType, setBloodType]             = useState('O-');
    const [bloodSugar, setBloodSugar]           = useState('');
    const [triglycerides, setTriglycerides]     = useState('');

    const navigate = useNavigate();

    const addPatient = async () => {
        const newPatient = {name, collectionDate, bloodType, bloodSugar, triglycerides};
        const response = await fetch('/log', {
            method: 'post',
            body: JSON.stringify(newPatient),
            headers: {
                'Content-Type': 'application/json',
        },
    });
    if(response.status === 201){
        alert(`Patient created successfully.`);
        navigate("/log");
    } else {
        alert(`ERROR: Patient NOT added. status code = ${response.status}`);
        navigate("/log");
    }

};
    
    return (
        <>
        <article>
            <h2>Add a Patient</h2>
            <p>Use the form below to create a new patient. Make sure to fill out all fields.</p>
            <form onSubmit={(e) => {e.preventDefault();}}>
                <table>
                    <tr className="addPatient">
                        <td><label for="name">First & Last Name</label>
                        <input required type='text' placeholder="First Last" value={name} onChange={e => setName(e.target.value)} id="name"/></td>
                        <td><label for="date">Collection Date</label>
                        <input required type="date" value={collectionDate} onChange={e => setCollectionDate(e.target.value)} id="date"/></td>
                        <td><label for="bloodType">Blood Type</label>
                        <select required defaultValue={bloodType} name="bloodType" id="bloodType" onChange={e => setBloodType(e.target.value)}>
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
                        <input required type="text" placeholder="100" value={bloodSugar} onChange={e => setBloodSugar(e.target.value)} id="bloodSugar"/></td>
                        <td><label for="triglycerides">Triglycerides</label>
                        <input required type="text" placeholder="100" value={triglycerides} onChange={e => setTriglycerides(e.target.value)} id="triglycerides"/></td>
                        
                    </tr>
                </table>
                <label for="submit">
                        <button type="submit" onClick={addPatient} id="submit">Add Patient</button>
                </label>
            </form>
        </article>
        </>
    )
}
export default CreatePage;