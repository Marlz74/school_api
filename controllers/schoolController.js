const db = require('../models/db'),
    haversine = require('haversine-distance');

exports.addSchool = (req, res) => {
    try {

        if (!req.body) {
            return res.status(400).json({ status: false, error: 'Invalid request data', fields: ["name", "address", "latitude", "longitude"] });
        }

        const { name, address, latitude, longitude } = req.body;
        if (!name || !address || !latitude || !longitude) {
            return res.status(400).json({ status: false, error: 'All fields are required', fields: ["name", "address", "latitude", "longitude"] });
        }

        if (!isFloat(latitude) || !isFloat(longitude)) return res.status(400).json({ status: false, error: 'latitude, longitude must be a float' });

        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        db.query(query, [name, address, latitude, longitude], (err, result) => {
            if (err) {
                return res.status(500).json({ status: false, error: 'Sorry, An unexpected error occured' });
            }
            res.status(201).json({ status: true, message: 'School added successfully' });
        });
    } catch (error) {
        return res.status(500).json({ status: false, error: error.message });

    }

}

exports.listSchools = (req, res) => {
    try {
        if (!req.query) {
            return res.status(400).json({ status: false, error: 'Invalid request' });
        }

        const { latitude, longitude } = req.query;

        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'latitude and longitude are required' });
        }

        const userLocation = { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };

        db.query('SELECT * FROM schools', (err, results) => {
            if (err) {
                return res.status(500).json({ status: false, error: 'Sorry, An unexpected error occured' });
            }

            const schools = results.map((school) => {
                const schoolLocation = { latitude: school.latitude, longitude: school.longitude };
                school.distance = haversine(userLocation, schoolLocation).toLocaleString();
                return school;
            });

            schools.sort((a, b) => a.distance - b.distance);

            res.status(200).json({ status: true, unit: "meters", schools });
        });
    } catch (error) {
        return res.status(500).json({ status: false, error: error.message });

    }
};


function isFloat(num) {
    return typeof num === 'number' && num % 1 !== 0;
}

