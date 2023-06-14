import React from "react";

import PatientRow from '../components/PatientRow.js'


function PatientTable({patients, updateLog, deleteLog}) {
    return (
        <>
            <table>
                <caption id="patientList">Patient List</caption>
                
                <thead>

                    <tr>
                        <td className="staff_table_head_begin">Name</td>
                        <td className="staff_table_head">Collection Date</td>
                        <td className="staff_table_head">Blood Type</td>
                        <td className="staff_table_head">Blood Sugar</td>
                        <td className="staff_table_head_end">Triglycerides</td>
                        
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient, index) =>
                        <PatientRow 
                        person={patient} 
                        key={index} 
                        updateLog={updateLog} 
                        deleteLog={deleteLog} />
                    )}
                </tbody>
            </table>
        </>
    )
}

export default PatientTable;