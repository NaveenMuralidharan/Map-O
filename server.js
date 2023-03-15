/***************************** */
// DEPENDENCIES
/***************************** */
require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")

const PORT = 4000

const { DATABASE_URL } = process.env 

/***************************** */
// DATABASE CONNECTION
/***************************** */
mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error))


/***************************** */
// MODELS
/***************************** */
const processSchema = new mongoose.Schema({
    
        processName:    String,
        orgUnit:        String,
        processOwner:   String,
        contactDetails: String,

        stages: [
            {   
                name:           String,
                orgUnit:        String,
                processOwner:   String,
                contactDetails: String,
                steps: [
                    {
                       order:       Number, 
                       stakeholder: String,
                       action:      String,
                       pass_to:     String,
                       purpose:     String,
                       channel:     String, 
                       frequency:   String,
                       tool:        String,
                       docType:     String,
                       docLink:     String 
                    }
                 ]
            }

        ]

        }
)

const Process = mongoose.model("Process", processSchema)
/***************************** */
// MIDDLEWARE
/***************************** */
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

/***************************** */
// ROUTES
/***************************** */
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

// INDEX ROUTE
app.get("/process", async (req, res) => {
    try {
        res.json(await Process.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})



// CREATE ROUTE
app.post("/process", async (req, res) => {
    try {
        res.json(await Process.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})


// GET PROCESS FOR ID ROUTE
app.get('/process/:id', async (req, res) => {
    try{
        res.json(await Process.findById(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})

// UPDATE LICENSE ROUTE
app.put('/process/:id', async (req, res) => {
    console.log(req.body)
    try{
        res.json(await Process.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    }catch(error){
        res.status(400).json(error)
    }
})


// DELETE LICENSE ROUTE
app.delete('/process/:id', async (req, res) => {
    try{
        res.json(await Process.findByIdAndDelete(req.params.id))
    }catch(error){
        res.status(400).json(error)
    }
})


/***************************** */
// SERVER LISTENER
/***************************** */
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})