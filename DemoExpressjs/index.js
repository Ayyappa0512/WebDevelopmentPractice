import express from 'express';
const app = express();
const port = 3000;

const cars = {
    name: "Ford",
    model: "Mustang",
    color: "Black",
    engine: "v12"
}

const data = `<header>This is header </header><body>This is body<button>get cart</button></body><footer>this is footer</footer/>`;

const getCars = app.get("/cars", (req, res) => {
    res.send(cars);
});

app.get("/", (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})