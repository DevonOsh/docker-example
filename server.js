import express from "express";
import 'dotenv/config';
import { getCurrentTime, getMeals, createMeal, deleteMeal } from "./db.js"

const app = express(),
    port = "2080";

app.use(express.static(process.cwd()+'/docker-example-ui/dist/docker-example-ui/'))
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(process.cwd()+'/docker-example-ui/dist/docker-example-ui/index.html')
})

app.listen(port, () => {
    console.log(`Server listening on port:${port}`)
})

app.get('/currentTime', (req, res) => {
    getCurrentTime().then(result => {
        res.status(200).send(result.rows[0].now)
    })
    .catch(error =>
        res.status(400).send(error)
    )
})

app.get('/mealPlans', (req, res) => {
    getMeals().then(result => {
        res.status(200).send(result.rows)
    })
    .catch(error =>
        res.status(400).send(error)
    )
})

app.post('/mealPlans', (req, res) => {
    const { dow, meal, mealName } = req.body;
    createMeal(dow, meal, mealName).then(result => {
        res.status(201).send(result)
    })
    .catch(error =>
        res.status(400).send(error)
    )
})

app.delete('/mealPlans/:id', (req, res) => {
    const id = parseInt(req.params.id);
    deleteMeal(id).then(result => {
        let response = JSON.stringify(`Deleted meal with ID: ${id}`)
        res.status(200).send(response)
    })
    .catch(error =>
        res.status(400).send(error)
    )
})