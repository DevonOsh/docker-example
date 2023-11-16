import express from "express";
import 'dotenv/config';
import { getCurrentTime } from "./db.js"

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
        res.status(200).send(result.rows[0].now);
    })
    .catch(error =>
        res.status(500).send(error))
})