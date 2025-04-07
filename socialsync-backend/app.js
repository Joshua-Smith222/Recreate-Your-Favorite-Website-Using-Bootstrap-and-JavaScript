const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Set up storage engine for Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder where files will be stored
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Ensure file names are unique
    }
});

// Initialize Multer with the storage settings
const upload = multer({ storage: storage });

// Handle profile picture upload
app.post('/upload-profile-pic', upload.single('profilePic'), (req, res) => {
    if (req.file) {
        res.json({
            message: 'Profile picture uploaded successfully',
            fileUrl: `/uploads/${req.file.filename}` // Return the file URL
        });
    } else {
        res.status(400).json({ message: 'Please upload a profile picture.' });
    }
});

// Serve static files (e.g., uploaded images)
app.use('/uploads', express.static('uploads'));

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
