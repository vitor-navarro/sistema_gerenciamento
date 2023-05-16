require('dotenv').config()

//imports
const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require("swagger-ui-express")
const conn = require("./db/conn")

//routes imports
const emailsRoutes = require("./routes/email")
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")

//initialization
const app = express();
const port = process.env.PORT;



//Middlewares
app.use(cors({
	origin: process.env.ENABLED_CORS
}))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }),)
app.use(express.json())
app.use(session({
	secret: process.env.SESSIONS_SECRET,
	resave: false,
	saveUninitialized: false,
}))

//swagger docs
const swaggerDocs = require("./swagger.json")
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup())

//Routes
app.use("/emails", emailsRoutes)
app.use("/user", userRoutes)
app.use("/auth", authRoutes)

conn.sync()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is listening on port http://localhost:${port}`);
		})
	})
	.catch((err) => console.log(err))


module.exports = { app }