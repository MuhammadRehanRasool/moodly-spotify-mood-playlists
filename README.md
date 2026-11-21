# Moodly – Mood-Based Spotify Playlists

Moodly reads your mood from a selfie and recommends a Spotify playlist to match it. Upload a photo or take one with your webcam. The app detects whether you look happy, sad, angry or surprised and shows the tracks from a curated playlist for that mood. Signed-in users also get a log of their past moods.

## How it works

1. **Account (optional).** Users register and log in against the Express API. Passwords are hashed with bcrypt and stored in MongoDB. The logged-in user is kept in `sessionStorage`.
2. **Mood detection.** On the home page the user uploads an image or captures one with the webcam (`react-webcam`). The client sends it to the [Face Analysis API](https://rapidapi.com/) on RapidAPI (`/emotions/process_file`). It then takes the strongest of the four emotions *happy*, *sad*, *angry* and *surprise*. If no face is found, the user is asked to try again.
3. **Playlist mapping.** Each mood maps to a fixed Spotify playlist ID in `client/src/CONSTANT.js`. The mood and playlist are saved in a cookie for one day.
4. **Spotify connection.** The user logs in to Spotify with the OAuth implicit grant flow, and the access token is stored in `localStorage`. The client then calls the Spotify Web API to list the playlist's tracks, each with cover art and a link to Spotify.
5. **Mood history.** For logged-in users, every detected mood is saved through `POST /data/insert`. The History page lists those moods, newest first.

## Features

- Photo upload or webcam capture
- Emotion detection (happy / sad / angry / surprise)
- One curated Spotify playlist per mood, with its tracks shown in the app
- Register / login with bcrypt-hashed passwords
- Per-user mood history
- About and Contact sections on a single-page layout

## Tech stack

- **Frontend:** React 18 (Create React App), React Router 6, MUI, axios, react-webcam
- **Backend:** Node.js, Express 4, Mongoose 5, bcrypt, dotenv
- **Database:** MongoDB
- **External APIs:** RapidAPI Face Analysis, Spotify Web API

## Project structure

```
.
├── server.js            # Express app: API routes and serves client/build
├── encryption.js        # bcrypt hash/compare helpers
├── models/              # Mongoose models: users, datas (mood entries)
├── routes/
│   ├── userRoute.js     # /user/insert, /user/validate, view/update/delete
│   └── dataRoute.js     # /data/insert, /data/view/:userId, update/delete
└── client/              # React app
    └── src/
        ├── CONSTANT.js  # config (env vars), mood→playlist map, helpers
        ├── components/  # Layout, Navbar, OpenCamera, SpotifyConnection
        └── views/       # Home, Playlist, History, Login, Register, About, Contact
```

## Setup

### Prerequisites

- Node.js 14+ and npm
- A MongoDB database (local or MongoDB Atlas)
- A [RapidAPI](https://rapidapi.com/) key subscribed to the **Face Analysis** API (`faceanalysis.p.rapidapi.com`)
- A Spotify app from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard). Add your client URL (e.g. `http://localhost:3000/`) as a Redirect URI.

### Server

```bash
cp .env.example .env   # set MONGODB_URI (and optionally PORT)
npm install
npm run dev            # or: npm start
```

| Variable      | Description                        |
|---------------|------------------------------------|
| `MONGODB_URI` | MongoDB connection string          |
| `PORT`        | API port (default `4000`)          |

### Client

```bash
cd client
cp .env.example .env   # fill in the values below
npm install
npm start
```

| Variable                      | Description                                                         |
|-------------------------------|---------------------------------------------------------------------|
| `REACT_APP_SERVER_URL`        | Backend base URL, trailing `/` (default `http://localhost:4000/`)  |
| `REACT_APP_CLIENT_URL`        | Frontend URL used as the Spotify redirect, trailing `/` (default `http://localhost:3000/`) |
| `REACT_APP_RAPID_API_KEY`     | RapidAPI key for Face Analysis                                      |
| `REACT_APP_SPOTIFY_CLIENT_ID` | Spotify app client ID                                               |

> Note: `REACT_APP_*` values are embedded in the browser bundle, so the RapidAPI key is visible to anyone using the deployed app.

### Production

`npm run build` in `client/` creates `client/build`, which the Express server serves for all non-API routes. Running `npm start` at the root then serves the whole app on one port. The `heroku-postbuild` script does this build automatically on Heroku.

## Scripts

| Location  | Command         | Description                           |
|-----------|-----------------|---------------------------------------|
| root      | `npm start`     | Start the API server                  |
| root      | `npm run dev`   | Start the API server with nodemon     |
| `client/` | `npm start`     | Start the React dev server            |
| `client/` | `npm run build` | Production build into `client/build`  |
| `client/` | `npm test`      | Run the CRA test runner               |
