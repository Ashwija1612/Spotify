const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000;
require('./config')
const app = express()

app.use(cors())
app.use(express.json({extended: true}))


const songsRef = require('./routes/songs');
const artistsRef = require('./routes/artists');

app.use('/api/songs', songsRef);
app.use('/api/artists', artistsRef);

// // Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))