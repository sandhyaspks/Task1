const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const petRoutes = require('./routes/pets');

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use('/api/pets', petRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err));
