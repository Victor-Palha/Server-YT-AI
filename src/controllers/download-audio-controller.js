import fs from "node:fs";
import { createMP3 } from "../services/create-mp3.js"
import { downloader } from "../services/downloader.js"

export async function downloadAudioController(request, response) {
    const videoId = request.query.v;
    if (!videoId) {
        return response.status(400).send({error: "Missing videoId"});
    }
    try {
        console.log("[AUDIO] Downloading audio from videoId: ", videoId);
        await downloader(videoId).then(async () => {
            await createMP3(videoId).then(()=>{
                console.log("[AUDIO] Audio downloaded and converted to mp3");
                fs.unlinkSync(`./src/audios/${videoId}.mp4`);
            });
        });
        return response.send({
            message: "Audio downloaded and converted to mp3",
            path: `http://localhost:3003/public/${videoId}.mp3`
        });
    } catch (error) {
        console.error("[AUDIO_ERROR] ", error);
        return response.status(500).send("Internal Server Error"); // Correção aqui
    }
}

