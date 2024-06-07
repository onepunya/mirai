const express = require('express');
const path = require('path');

const app = express(); // Inisialisasi aplikasi Express
const PORT = process.env.PORT || 3000; // Gunakan port dari environment variable atau 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Mengirim file index.html
});

// Tangani error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;