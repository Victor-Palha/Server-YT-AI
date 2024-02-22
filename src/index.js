import express from "express"
import path from "node:path"
import cors from "cors"
import { downloadAudioController } from "./controllers/download-audio-controller.js"
import { deleteAudioController } from "./controllers/delete-audio-controller.js"

const app = express()
app.use(cors({
    origin: "*"
}))
const __dirname = process.cwd()
console.log(__dirname + "/audios")
app.use("/public", express.static(__dirname + "/src/audios"));

app.get("/", (req, res)=>{
    res.status(200).send({message: "Welcome to the audio downloader API", routes: [{route: "/audio", method: "GET", description: "Download audio from a given URL"}, {route: "/audio", method: "DELETE", description: "Delete audio from the server"}]})
})
app.get("/audio", downloadAudioController)
app.delete("/audio", deleteAudioController)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})