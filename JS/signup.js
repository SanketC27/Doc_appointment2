$(document).ready(function () {
    // Initially, hide both doctor and patient signup forms
    $("#doctorSignupForm, #patientSignupForm").hide();
    $("#backArrow").hide();  // Hide back button initially

    // When Doctor image is clicked, show the Doctor signup form and hide the Patient form
    $("#doctorImage").click(function () {
        $("#doctorSignupForm").show();  // Show doctor signup form
        $("#patientSignupForm").hide();  // Hide patient signup form
        $("#backArrow").show();  // Show the back button
    });

    // When Patient image is clicked, show the Patient signup form and hide the Doctor form
    $("#patientImage").click(function () {
        $("#patientSignupForm").show();  // Show patient signup form
        $("#doctorSignupForm").hide();  // Hide doctor signup form
        $("#backArrow").show();  // Show the back button
    });

    // Back button functionality
    $("#backArrow").click(function () {
        $("#doctorSignupForm, #patientSignupForm").hide();  // Hide both forms
        $(this).hide();  // Hide the back button
    });

    // Doctor signup form submission
    $("#doctorForm").submit(function (event) {
        event.preventDefault();  // Prevent the default form submission

        // Simulate Doctor form submission (e.g., validation and AJAX)
        let doctorName = $("#doctorName").val();
        let doctorEmail = $("#doctorEmail").val();
        let doctorPassword = $("#doctorPassword").val();
        let specialization = $("#specialization").val();
        let dob = $("#dob").val();

        // Here you can add your validation and AJAX requests
        if (doctorName && doctorEmail && doctorPassword && specialization && dob) {
            $("#doctorSignupMessage")
                .html("<div class='alert alert-success'>Doctor Signup successful!</div>")
                .show();
        } else {
            $("#doctorSignupMessage")
                .html("<div class='alert alert-danger'>Please fill all fields correctly!</div>")
                .show();
        }
    });

    // Patient signup form submission
    $("#patientForm").submit(function (event) {
        event.preventDefault();  // Prevent the default form submission

        // Simulate Patient form submission (e.g., validation and AJAX)
        let patientName = $("#patientName").val();
        let patientEmail = $("#patientEmail").val();
        let patientPassword = $("#patientPassword").val();
        let medicalHistory = $("#medicalHistory").val();

        // Here you can add your validation and AJAX requests
        if (patientName && patientEmail && patientPassword) {
            $("#patientSignupMessage")
                .html("<div class='alert alert-success'>Patient Signup successful!</div>")
                .show();
        } else {
            $("#patientSignupMessage")
                .html("<div class='alert alert-danger'>Please fill all fields correctly!</div>")
                .show();
        }
    });
});
