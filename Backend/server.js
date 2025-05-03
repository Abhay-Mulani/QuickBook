const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bookingsRoute = require('./routes/bookings');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', bookingsRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
