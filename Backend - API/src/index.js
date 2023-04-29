require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser')

const cors = require('cors')
const corsOptions = {
    origin: process.env.ENABLED_CORS
}

const conn = require("./db/conn")

var helmet = require('helmet');

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//cors
app.use(cors(corsOptions))
app.use(bodyParser.json())

//arquivos estáticos
app.use(express.static("public"))

//security
//app.use(helmet());
const emailsRoutes = require("./routes/email")
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")

app.use("/emails", emailsRoutes)
app.use("/user", userRoutes)
app.use("/auth", authRoutes)

conn
    .sync()
    .then(()=>{
    app.listen(port, () => {
            console.log(`Server is listening on port http://localhost:${port}`);
            })
        })
    .catch((err)=>console.log(err))
