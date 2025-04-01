// index.js

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up multer for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Define where the uploaded files will be stored
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        // Set the filename for uploaded files
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid filename collision
    }
});

// Create the multer upload instance
const upload = multer({ storage: storage });

// Set up middleware to serve static files (uploads)
app.use('/uploads', express.static('uploads'));

// Route to handle profile picture upload
app.post('/upload-profile-pic', upload.single('profilePic'), (req, res) => {
    if (req.file) {
        res.json({
            message: 'Profile picture uploaded successfully',
            fileUrl: `/uploads/${req.file.filename}`,
        });
    } else {
        res.status(400).json({ message: 'Please upload a profile picture.' });
    }
});

// Route to handle photo library uploads
app.post('/upload-photos', upload.array('photoLibrary', 10), (req, res) => {
    if (req.files) {
        const fileUrls = req.files.map(file => `/uploads/${file.filename}`);
        res.json({
            message: 'Photos uploaded successfully',
            fileUrls: fileUrls,
        });
    } else {
        res.status(400).json({ message: 'Please upload photos.' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
