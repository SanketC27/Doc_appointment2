$(document).ready(function () {
    // Hide both forms initially
    $("#doctorLoginForm, #patientLoginForm").hide();

    // Show doctor login form when doctor image is clicked
    $("#doctorImage").click(function () {
        $("#patientLoginForm, #patientImage").hide();  // Hide patient form and image
        $("#doctorLoginForm").show();  // Show doctor form
        $("#backArrow").show();  // Show back button
    });

    // Show patient login form when patient image is clicked
    $("#patientImage").click(function () {
        $("#doctorLoginForm, #doctorImage").hide();  // Hide doctor form and image
        $("#patientLoginForm").show();  // Show patient form
        $("#backArrow").show();  // Show back button
    });

    // Back button functionality
    $("#backArrow").click(function () {
        $("#doctorLoginForm, #patientLoginForm").hide();  // Hide both forms
        $("#doctorImage, #patientImage").show();  // Show both images
        $("#backArrow").hide();  // Hide the back button
    });

    // Doctor login form submission
    $("#doctorLoginFormForm").submit(function (event) {
        event.preventDefault();

        if ($("#doctorEmail").val() === "" || $("#doctorPassword").val() === "") {
            $("#doctorLoginMessage").html("<div class='alert alert-danger'>Please fill in all fields.</div>").show();
            return;
        }

        window.location.href = "doctor.html";
    });

    // Patient login form submission
    $("#patientLoginFormForm").submit(function (event) {
        event.preventDefault();

        if ($("#patientEmail").val() === "" || $("#patientPassword").val() === "") {
            $("#patientLoginMessage").html("<div class='alert alert-danger'>Please fill in all fields.</div>").show();
            return;
        }

        window.location.href = "patient.html";
    });
});
