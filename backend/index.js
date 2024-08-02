const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")
const cronjob = require("node-cron")
const connectDatabase = require("./config/connectDB")
const LocalBBC = require("./models/localNewsBBCModel")

dotenv.config({
    path: path.join(__dirname, 'config', 'config.env')
})



connectDatabase();


app.use(express.json())
app.use(cors())


const news = require("./routes/getNews");
const movies = require("./routes/getMovies");

app.use("/news", news);
app.use("/movies", movies);


app.post("/api/products", async (req, res) => {
    console.log(req.body);
    res.send("data received")
    const newlocalbbc = await LocalBBC.create(req.body);
    console.log(newlocalbbc);
    newlocalbbc.save();

});

app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}...`);
})