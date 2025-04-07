document.addEventListener('DOMContentLoaded', function() {
    // Post creation logic
    document.querySelector('.btn-primary.mt-2').addEventListener('click', function() {
        const postContent = document.querySelector('input.form-control').value;
        if (postContent.trim() !== "") {
            console.log('Post created:', postContent);
            document.querySelector('input.form-control').value = ""; // Clear input
        } else {
            alert('Please enter something to post.');
        }
    });

    // Like button functionality
    document.querySelectorAll('.btn-outline-primary').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Post liked!');
        });
    });

    // Comment button functionality
    document.querySelectorAll('.btn-outline-secondary').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Comment button clicked');
        });
    });

    // Add Friend functionality
    document.querySelectorAll('.btn-sm.btn-primary').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Friend added!');
        });
    });
});
