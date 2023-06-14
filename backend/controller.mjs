import 'dotenv/config';
import express from 'express';
import * as patients from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

// Create
app.post ('/log', (req,res) => { 
    patients.createPatient(
        req.body.name, 
        req.body.collectionDate, 
        req.body.bloodType,
        req.body.bloodSugar,
        req.body.triglycerides
        )
        .then(patient => {
            res.status(201).json(patient);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Creation of document has failed due to user-input error.' });
        });
});

// Retrieve
app.get('/log', (req, res) => {
    patients.retrievePatients()
        .then(patient => { 
            if (patient !== null) {
                res.json(patient);
            } else {
                res.status(404).json({ Error: 'The document was not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Unable to retrieve the document due to user-input error.' });
        });
});
// Retrieve by ID
app.get('/log/:_id', (req, res) => {
    patients.retrievePatientByID(req.params._id)
    .then(patient => { 
        if (patient !== null) {
            res.json(patient);
        } else {
            res.status(404).json({ Error: 'The document was not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to retrieve the document due to user-input error.' });
    });

});
// Update
app.put('/log/:_id', (req, res) => {
    patients.updatePatient(
        req.params._id, 
        req.body.name, 
        req.body.collectionDate, 
        req.body.bloodType,
        req.body.bloodSugar,
        req.body.triglycerides
    )
    .then(patient => {
        res.json(patient);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error:  'Unable to update the document due to user-input error.' });
    });
});
// Delete
app.delete('/log/:_id', (req, res) => {
    patients.deletePatientById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'The document does not exist.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ error:  'Unable to delete the document due to user-input error.' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});