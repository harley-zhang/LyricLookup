const express = require("express");
const spotifyWebApi = require("spotify-web-api-node");
const cors=require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/refresh", (req, res) => {
    const refreshToken = req.body.refresh_token;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: "http://localhost:3000",
        clientId: "f1f4a3ec28354264b8d11b9e4df84c63",
        clientSecret: "01a8480dee6c406c8c32cd71c3c3d812",
      })

    spotifyApi.refreshAccessToken().then(
        function(data) {
            console.log(data.body)
          console.log('The access token has been refreshed!');
          spotifyApi.setAccessToken(data.body['access_token']);
        }).catch(() => {
            res.sendStatus(400)
        })
});

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: "http://localhost:3000",
      clientId: "f1f4a3ec28354264b8d11b9e4df84c63",
      clientSecret: "01a8480dee6c406c8c32cd71c3c3d812",
    })
  
    spotifyApi
      .authorizationCodeGrant(code)
      .then(data => {
        res.json({
          accessToken: data.body.access_token,
          refreshToken: data.body.refresh_token,
          expiresIn: data.body.expires_in,
        })
      })
      .catch(err => {
        console.log(err)
        res.sendStatus(400)
      })
  })

  app.listen(3001)