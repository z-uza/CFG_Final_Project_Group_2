import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const PORT = 5000;
const app = express();

app.use(cors()); // use CORS middleware to allow requests from any origin 
const corsOptions = {
    origin: "http://localhost:3000" // this is the our browswer URL 
};

const baseURL = 'https://queue-times.com/parks'; 

app.get('/get-rides', cors(corsOptions), async (req, res) => { // defines GET route and applies CORS options to it 
    const parkId = req.query.id

    if (!parkId) {
        return res.status(400).json({ error: "Park ID is required" });
    }

    const requestEndpoint = `${baseURL}/${parkId}/queue_times.json`; // we need data for each park so construct this URL

    try {
        const fetchOptions = {
            method: 'GET'
        };
        const response = await fetch(requestEndpoint, fetchOptions);

        if (!response.ok) {
            console.error(`Error fetching data: ${response.statusText}`);
            return res.status(response.status).json({ status: response.status, error: response.statusText });
        }

        const jsonResponse = await response.json();
        res.json(jsonResponse);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => { // starts server
    console.log(`Example app listening at http://localhost:${PORT}`);
});
