require('dotenv').config()

const express = require('express');
const session = require('express-session')
const app = express();
const port = process.env.PORT;

const bodyParser = require('body-parser')

const cors = require('cors')
const corsOptions = {
    origin: process.env.ENABLED_CORS
}

const conn = require("./db/conn")

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//cors
app.use(cors(corsOptions))
app.use(bodyParser.json())

//express session
app.use(
    session({
        secret: process.env.SESSIONS_SECRET,
        resave: false,
        saveUninitialized: false,
    })
)

//swagger docs
const swaggerUi = require("swagger-ui-express")
const swaggerDocs = require("./swagger.json")

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup())

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


module.exports = {app}