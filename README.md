# Server
This server download videos from youtube and convert them to mp3, saving them in a folder called "audios" in the src folder of the project.
## Routes
### /audio -> GET
This route receives a query parameter called "v" with the video id of the youtube video and returns the path to audio file of the video in mp3 format.
* https://api.victor-palha/audio?v=video_id
* Response:
```json
{
    "message": "Audio downloaded and converted to mp3",
    "path": "path_to_audio"
}
```
### /audio -> DELETE
This route receives a query parameter called "v" with the video id of the youtube video and deletes the audio file of the video.
* https://api.victor-palha/audio?v=video_id
* Response: status 204

## How to run
To run the server you need to have node.js installed in your machine. After that, you can run the following commands:
```bash
git clone https://github.com/Victor-Palha/Server-YT-AI.git
cd Server-YT-AI
npm install
npm run start
```
## Docker
To run the server using docker, you need to have docker installed in your machine. After that, you can run the following commands:
### Compose
```bash
docker compose up -d
```
### Build
```bash
docker build -t server-yt-ai .
docker run -d -p 3003:3003 server-yt-ai
```
