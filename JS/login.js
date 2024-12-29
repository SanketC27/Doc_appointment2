$(document).ready(function () {
    $("#showDoctorLogin, #doctorImage").click(function () {
        $("#patientLoginForm, #patientImage, #showPatientLogin").hide();
        $("#doctorLoginForm").show();
        $("#doctorLoginMessage").hide();
        $("#backArrow").show();
    });

    $("#showPatientLogin, #patientImage").click(function () {
        $("#doctorLoginForm, #doctorImage, #showDoctorLogin").hide();
        $("#patientLoginForm").show();
        $("#patientLoginMessage").hide();
        $("#backArrow").show();
    });

    $("#backArrow").click(function () {
        $("#doctorLoginForm, #patientLoginForm").hide();
        $("#doctorImage, #showDoctorLogin, #patientImage, #showPatientLogin").show();
        $("#backArrow").hide();
    });

    $("#doctorLoginFormForm").submit(function (event) {
        event.preventDefault();

        if ($("#doctorEmail").val() === "" || $("#doctorPassword").val() === "") {
            $("#doctorLoginMessage").html("<div class='alert alert-danger'>Please fill in all fields.</div>").show();
            return;
        }

        window.location.href = "doctor.html";
    });

    $("#patientLoginFormForm").submit(function (event) {
        event.preventDefault();

        if ($("#patientEmail").val() === "" || $("#patientPassword").val() === "") {
            $("#patientLoginMessage").html("<div class='alert alert-danger'>Please fill in all fields.</div>").show();
            return;
        }

        window.location.href = "patient.html";
    });
});