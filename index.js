const express = require('express');
const app = express();
const port = 3000;

function validateNumbers(num1, num2, res, allowZeroDiv = true) {
    if (num1 === undefined || num2 === undefined) {
        res.status(400).json({ error: "Missing query parameters. Please provide both num1 and num2." });
        return false;
    }

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({ error: "Invalid input. num1 and num2 must be numbers." });
        return false;
    }

    if (!allowZeroDiv && Number(num2) === 0) {
        res.status(400).json({ error: "Division by zero is not allowed." });
        return false;
    }

    return true;
}

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2, res)) return;
    res.json({ result: Number(num1) + Number(num2) });
});

app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2, res)) return;
    res.json({ result: Number(num1) - Number(num2) });
});

app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2, res)) return;
    res.json({ result: Number(num1) * Number(num2) });
});

app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!validateNumbers(num1, num2, res, false)) return;
    res.json({ result: Number(num1) / Number(num2) });
});

app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
