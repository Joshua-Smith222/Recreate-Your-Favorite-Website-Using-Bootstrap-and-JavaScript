const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();

// CORS configuration to allow frontend (localhost:5173) to make requests
app.use(cors({
  origin: 'http://localhost:5173', // Frontend URL (Adjust as needed)
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow other headers if needed
  preflightContinue: false, // Send a proper response to preflight requests
  optionsSuccessStatus: 200, // Respond with 200 OK for OPTIONS requests
}));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer storage config for file uploads
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
  try {
    const { name, email, password } = req.body;

    // Log the sign-up data (For debugging purposes)
    console.log('Sign-up data:', { name, email, password });

    // You can add your database logic here to store the user's details

    // Return success response
    res.json({ message: 'Sign-up successful!' });
  } catch (err) {
    console.error('Error processing the sign-up:', err);
    res.status(500).json({ message: 'Something went wrong on the server.' });
  }
});

// Upload single profile picture
app.post('/upload-profile-pic', upload.single('profilePic'), (req, res) => {
  try {
    if (req.file) {
      res.json({
        message: 'Profile picture uploaded successfully',
        fileUrl: `/uploads/${req.file.filename}`,
      });
    } else {
      res.status(400).json({ message: 'Please upload a profile picture.' });
    }
  } catch (err) {
    console.error('Error uploading profile picture:', err);
    res.status(500).json({ message: 'Error uploading the profile picture.' });
  }
});

// Upload multiple photos (photo library)
app.post('/upload-photos', upload.array('photoLibrary', 10), (req, res) => {
  try {
    if (req.files) {
      const fileUrls = req.files.map(file => `/uploads/${file.filename}`);
      res.json({
        message: 'Photos uploaded successfully',
        fileUrls,
      });
    } else {
      res.status(400).json({ message: 'Please upload photos.' });
    }
  } catch (err) {
    console.error('Error uploading photos:', err);
    res.status(500).json({ message: 'Error uploading photos.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
