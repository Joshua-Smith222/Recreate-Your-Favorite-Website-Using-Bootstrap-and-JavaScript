My project
Project Overview
This project uses React with Vite for fast development and hot module reloading. The app includes a Home Page and a Sign-Up Page, both styled using Bootstrap 5 and enhanced with JavaScript functionalities.

Features:
Home page with a navigation bar.

Sign-up form for user registration.

Bootstrap components for responsive design and modern UI.

JavaScript functionality to interact with elements like creating posts, liking posts, commenting, and adding friends.

Bootstrap Components Used
The project utilizes several Bootstrap 5 components for the frontend. Below are the components used and their purpose:

1. Navbar
A responsive navigation bar is included in both the Home Page and Sign-Up Page. It includes links for easy navigation and adapts to different screen sizes.

Example:
html
Copy
Edit
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">SocialSync</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Search</a>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn-primary px-3" href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
.navbar: The primary navbar component.

.navbar-expand-lg: Makes the navbar responsive, collapsing on smaller screens.

.navbar-toggler: The button that toggles the navbar collapse on smaller screens.

2. Form Inputs (Sign-Up Form)
The Sign-Up Page uses several form components to collect user input, such as name, email, and password.

Example:
html
Copy
Edit
<form>
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" required />
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" required />
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" required />
  </div>
  <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
.form-control: Provides consistent styling for inputs and textareas.

.btn: A basic button styling, with .btn-primary indicating a primary action button.

3. Container for Layout
Bootstrap's .container class is used to center and contain the page content.

Example:
html
Copy
Edit
<div class="container my-5">
  <!-- Form and content go here -->
</div>
.container: Centers and adds padding around content.

.my-5: Adds vertical margin around the container.

4. Footer
A simple footer using Bootstrap’s .bg-light and .text-center classes.

Example:
html
Copy
Edit
<footer class="bg-light text-center py-3 mt-auto">
  <p class="mb-0">&copy; 2025 SocialSync. All Rights Reserved.</p>
</footer>
.bg-light: Sets a light background color.

.text-center: Centers the text.

.py-3: Adds vertical padding inside the footer.

JavaScript Components
Bootstrap 5 includes JavaScript components for interactive functionality. In this project, we use the following JS components:

1. Collapse (Navbar Toggler)
The navbar collapses on smaller screens and expands when toggled. This is done using Bootstrap's collapse component, which is controlled by JavaScript.

The collapse class is applied to the navbar, and a button with data-bs-toggle="collapse" triggers it.

html
Copy
Edit
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
  <span class="navbar-toggler-icon"></span>
</button>
JavaScript is automatically included via the Bootstrap JS bundle when you include the required Bootstrap JS file:

html
Copy
Edit
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
This enables the collapsible behavior for the navigation bar.

2. Post Creation, Like, Comment, and Add Friend Logic
This JavaScript code handles user interactions like creating posts, liking posts, commenting, and adding friends. Each button has a specific event listener attached to it.

Post Creation:
javascript
Copy
Edit
document.querySelector('.btn-primary.mt-2').addEventListener('click', function() {
    const postContent = document.querySelector('input.form-control').value;
    if (postContent.trim() !== "") {
        console.log('Post created:', postContent);
        document.querySelector('input.form-control').value = ""; // Clear input
    } else {
        alert('Please enter something to post.');
    }
});
This listens for clicks on a button with the class .btn-primary.mt-2, checks if the post content is empty, and either logs the post or asks the user to enter content.

Like Button:
javascript
Copy
Edit
document.querySelectorAll('.btn-outline-primary').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Post liked!');
    });
});
This listens for clicks on buttons with the class .btn-outline-primary and logs "Post liked!" when clicked.

Comment Button:
javascript
Copy
Edit
document.querySelectorAll('.btn-outline-secondary').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Comment button clicked');
    });
});
This listens for clicks on buttons with the class .btn-outline-secondary and logs "Comment button clicked" when clicked.

Add Friend Button:
javascript
Copy
Edit
document.querySelectorAll('.btn-sm.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Friend added!');
    });
});
This listens for clicks on buttons with the class .btn-sm.btn-primary and logs "Friend added!" when clicked.

How to Set Up
Prerequisites
Node.js and npm are required to run the React app.

Bootstrap is included via CDN for styles and JS components.

Installation Steps
Clone the repository:

bash
Copy
Edit
git clone <repository-url>
Navigate into the project directory:

bash
Copy
Edit
cd <project-directory>
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Visit http://localhost:3000 to see the app in action!

Project Structure
css
Copy
Edit
src/
├── components/
│   ├── HomePage.jsx
│   ├── SignUpPage.jsx
├── App.jsx
├── main.jsx
└── ...
Conclusion
This project provides a responsive sign-up form with Bootstrap components, React, and Vite, offering a simple layout for building out additional functionality such as post creation, liking posts, commenting, and adding friends.


