
import React, {useState, useEffect} from "react";
import PatientTable from "../components/PatientTable";
import { AiFillFileAdd } from "react-icons/ai";
import { Link, useNavigate} from 'react-router-dom';

function LogPage({setPatient}) {
    const navigate = useNavigate();
    const [patients, setPatients] = useState([]);

    //retrieve
    const getLog = async () => {
            const res = await fetch("/log");
            const patients = await res.json();
            setPatients(patients);
    }
    //update
    const updateLog = async patient => {
        setPatient(patient);
        navigate('/edit-patient');
    }
    //delete
    const deleteLog = async _id => {
        const res = await fetch(`/log/${_id}`, {method: 'DELETE'})
        if (res.status === 204) {
            const getResponse = await fetch('/log');
            const patients = await getResponse.json();
            setPatients(patients);
        } else {
            res.send(`Failed to delete movie with _id = ${_id}, status code = ${res.status}`)
        }
    }
    useEffect(() => {
        getLog();
    }, []);

    return (
        <>
        <h2>Patient Log</h2>
        <article>
            <h3>CONFIDENTIAL: for Lab Technicians Only</h3>
            <p>
            This is the collection of patients that have had their blood tested. We have stored the Blood type of each patient,
             the blood sugar levels of each patient and their triglycerides count. You can update the patient if needed.
            </p>
            <p><Link to="/add-patient"><AiFillFileAdd id="addIcon" title="Create New Patient"/></Link></p>
            </article>
            <PatientTable
                patients = {patients}
                updateLog = {updateLog}
                deleteLog = {deleteLog}
            />
        </>
    );
};


export default LogPage;