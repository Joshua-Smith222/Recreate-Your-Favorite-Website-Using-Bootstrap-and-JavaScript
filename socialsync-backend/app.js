const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express(); // Define the app first

// Enable CORS
app.use(cors());

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Serve static files (uploaded images)
app.use('/uploads', express.static('uploads'));

// Sign-up route
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    console.log('Sign-up data:', { name, email, password });
    res.json({ message: 'Sign-up successful!' });
});

// Upload single profile picture
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

// Upload multiple photos (photo library)
app.post('/upload-photos', upload.array('photoLibrary', 10), (req, res) => {
    if (req.files) {
        const fileUrls = req.files.map(file => `/uploads/${file.filename}`);
        res.json({
            message: 'Photos uploaded successfully',
            fileUrls,
        });
    } else {
        res.status(400).json({ message: 'Please upload photos.' });
    }
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
