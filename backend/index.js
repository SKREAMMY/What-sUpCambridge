const express = require("express")
const app = express()
const cors = require("cors")
require('dotenv').config()


app.use(express.json())
app.use(cors())



const news = require("./routes/getNews")

app.use("/news", news);

app.listen(process.env.PORT, () => {
    console.log(`App is listening at port ${process.env.PORT}...`);
})