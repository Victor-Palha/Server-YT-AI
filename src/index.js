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

app.get("/audio", downloadAudioController)
app.delete("/audio", deleteAudioController)

app.listen(3003, () => {
    console.log("Server is running on port 3003")
})