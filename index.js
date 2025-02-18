// index.js

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Use middleware
app.use(cors());
app.use(express.json());

// Sample data (similar to the JSON server you referenced)
const surveyData = [
    {
        "id": 1,
        "question": "How satisfied are you with our service?",
        "answers": {
            "a": "Very satisfied",
            "b": "Satisfied",
            "c": "Neutral",
            "d": "Dissatisfied",
            "e": "Very dissatisfied"
        }
    },
    {
        "id": 2,
        "question": "Would you recommend us to a friend?",
        "answers": {
            "a": "Definitely yes",
            "b": "Probably yes",
            "c": "Not sure",
            "d": "Probably not",
            "e": "Definitely not"
        }
    }
    // Add more data as needed
];

// Routes
app.get('/survey', (req, res) => {
    res.json(surveyData);
});

app.get('/survey/:id', (req, res) => {
    const surveyItem = surveyData.find(item => item.id === parseInt(req.params.id));
    if (surveyItem) {
        res.json(surveyItem);
    } else {
        res.status(404).send('Survey not found');
    }
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});