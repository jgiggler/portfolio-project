import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Blood Record collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const bloodRecord = mongoose.Schema({
	name:    { type: String, required: true },
	collectionDate:   {type: Date, required: true, default: Date.now},
    bloodType: { type: String, required: true },
    bloodSugar: {type: Number,
                required: true,
                min: [0, "Negative values not allowed"]},
    triglycerides: {type: Number,
                    required: true,
                    min: [0, "Negative values not allowed"]},
});

const Patient = mongoose.model('Patient', bloodRecord);

const createPatient = async (name, collectionDate, bloodType, bloodSugar, triglycerides) => {
    const patient = new Patient({ 
        name: name,
        collectionDate: collectionDate,
        bloodType: bloodType,
        bloodSugar: bloodSugar,
        triglycerides: triglycerides,
    });
    return patient.save();
}

const retrievePatients = async () => {
    const query = Patient.find();
    return query.exec();
}

const retrievePatientByID = async (_id) => {
    const query = Patient.findById({_id: _id});
    return query.exec();
}

const updatePatient = async (_id, name, collectionDate, bloodType, bloodSugar, triglycerides) => {
    const result = await Patient.replaceOne({_id: _id }, {
        name: name,
        collectionDate: collectionDate,
        bloodType: bloodType,
        bloodSugar: bloodSugar,
        triglycerides: triglycerides
    });
    return { 
        _id: _id, 
        name: name,
        collectionDate: collectionDate,
        bloodType: bloodType,
        bloodSugar: bloodSugar,
        triglycerides: triglycerides
    }
}

const deletePatientById = async (_id) => {
    const result = await Patient.deleteOne({_id: _id});
    return result.deletedCount;
};

export {createPatient, retrievePatients, retrievePatientByID, updatePatient, deletePatientById}