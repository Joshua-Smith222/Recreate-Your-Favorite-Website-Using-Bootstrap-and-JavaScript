// Handle profile picture upload using AJAX
$('#profilePicForm').submit(function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Create FormData object to send form data (including file)
    var formData = new FormData(this);

    $.ajax({
        url: 'http://localhost:3000/upload-profile-pic',  // Adjust the URL to match your backend API
        type: 'POST',
        data: formData,
        contentType: false,  // Do not set content type
        processData: false,  // Do not process data
        success: function(response) {
            // On success, display the uploaded file URL
            $('#profilePicMessage').html('<div class="alert alert-success">Profile picture uploaded successfully! <br><img src="' + response.fileUrl + '" alt="Profile Picture" class="img-fluid mt-2" style="max-width: 200px;"></div>');
        },
        error: function(error) {
            // On error, display an error message
            $('#profilePicMessage').html('<div class="alert alert-danger">Error uploading profile picture. Please try again.</div>');
        }
    });
});

// Handle photo library upload using AJAX
$('#photoLibraryForm').submit(function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Create FormData object to send form data (including files)
    var formData = new FormData(this);

    $.ajax({
        url: 'http://localhost:3000/upload-photos',  // Adjust the URL to match your backend API
        type: 'POST',
        data: formData,
        contentType: false,  // Do not set content type
        processData: false,  // Do not process data
        success: function(response) {
            // On success, display the uploaded file URLs
            var message = '<div class="alert alert-success">Photos uploaded successfully!</div>';
            response.fileUrls.forEach(function(url) {
                message += '<div><img src="' + url + '" alt="Photo" class="img-fluid mt-2" style="max-width: 200px;"></div>';
            });
            $('#photoLibraryMessage').html(message);
        },
        error: function(error) {
            // On error, display an error message
            $('#photoLibraryMessage').html('<div class="alert alert-danger">Error uploading photos. Please try again.</div>');
        }
    });
});
