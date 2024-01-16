const express  = require('express');

const app = express();

const PORT = process.env.PORT ? process.env.PORT : 4590;

let artists = [
    {
      "artist_name": "John Doe",
      "artist_genre": "Rock",
      "albums_recorded": 5,
      "username": "john_doe_music"
    },
    {
      "artist_name": "Jane Smith",
      "artist_genre": "Pop",
      "albums_recorded": 3,
      "username": "jane_smith_music"
    },
    {
      "artist_name": "Alex Johnson",
      "artist_genre": "Hip-Hop",
      "albums_recorded": 2,
      "username": "alex_johnson_beats"
    },
    {
      "artist_name": "Emily Davis",
      "artist_genre": "Indie",
      "albums_recorded": 4,
      "username": "emily_davis_sound"
    },
    {
      "artist_name": "Mike Williams",
      "artist_genre": "Electronic",
      "albums_recorded": 7,
      "username": "mike_williams_beats"
    }
];
  

app.get('/v1/artists',(req,res) => {
    return res.json(artists);
});

app.listen(PORT,() => {
    console.log(`up and running on port ${PORT}`);
})