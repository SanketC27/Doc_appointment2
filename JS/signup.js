$(document).ready(function () {
    // When Doctor image is clicked, show Doctor form and hide Patient form
    $("#doctorImage").click(function () {
        $("#patientSignupForm").hide();  // Hide the patient form
        $("#doctorSignupForm").show();  // Show the doctor form
    });

    // When Patient image is clicked, show Patient form and hide Doctor form
    $("#patientImage").click(function () {
        $("#doctorSignupForm").hide();  // Hide the doctor form
        $("#patientSignupForm").show();  // Show the patient form
    });

    // Doctor form submission handling
    $("#doctorForm").submit(function (event) {
        event.preventDefault();  // Prevent default form submission
        // Simulate Doctor form submission (e.g., validation and AJAX)
        $("#doctorSignupMessage").html("<div class='alert alert-success'>Doctor Signup successful! (Simulated)</div>").show();
    });

    // Patient form submission handling
    $("#patientForm").submit(function (event) {
        event.preventDefault();  // Prevent default form submission
        // Simulate Patient form submission (e.g., validation and AJAX)
        $("#patientSignupMessage").html("<div class='alert alert-success'>Patient Signup successful! (Simulated)</div>").show();
    });
});
