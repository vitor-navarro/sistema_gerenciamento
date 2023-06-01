let resetDatabase = false

if(process.env.NODE_ENV == 'test'){
	resetDatabase = true
	require('dotenv').config({ path: '.env.test' });

} else if(process.env.NODE_ENV == 'production'){
	require('dotenv').config({ path: '.env.production' })

} else{
	require('dotenv').config() //development
	
}

//imports
const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require("swagger-ui-express")
const conn = require("./db/conn")
const responseTimeMiddleware = require("./middlewares/performance")

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
app.use(responseTimeMiddleware)

//swagger docs
const swaggerDocs = require("./swagger.json")
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup())

//Routes
app.use("/emails", emailsRoutes)
app.use("/user", userRoutes)
app.use("/auth", authRoutes)

//conn.sync({ force: true}) //reset database
conn.sync( {force : resetDatabase} )
//conn.sync()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is listening on port http://localhost:${port}`);
		})
	})
	.catch((err) => console.log(err))

module.exports = { app }