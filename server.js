import express from "express";

const app = express(),
    port = "2080";

app.use(express.static(process.cwd()+'/docker-example-ui/dist/docker-example-ui/'))

app.get('/', (req, res) => {
    res.sendFile(process.cwd()+'/docker-example-ui/dist/docker-example-ui/index.html')
})

app.listen(port, () => {
    console.log(`Server listening on port:${port}`)
})