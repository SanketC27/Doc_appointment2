$(document).ready(function () {
    $("#updateAvailability").click(function () {
        var status = $("#availabilityStatus").val();
        $("#availabilityMessage").html("<div class='alert alert-success'>Availability updated to " + status + "! (Simulated)</div>").show();
        //AJAX request to backend
    });
    $("#viewMedicalHistory").click(function () {
        var patientEmail = $("#patientEmailForHistory").val();
        if (patientEmail == "") {
            $("#medicalHistoryDisplay").html("<div class='alert alert-danger'>Please enter patient email</div>").show();
            return;
        }
        $("#medicalHistoryDisplay").html("<p>Medical history for " + patientEmail + " will be displayed here. (Simulated)</p>").show();
        //AJAX request to backend
    });
    var appointments = [
        { patient: "patient1@example.com", date: "2024-04-01", time: "10:00 AM" },
        { patient: "patient2@example.com", date: "2024-04-02", time: "11:30 AM" },
    ];
    if (appointments.length > 0) {
        $("#scheduledAppointments").html("");
        appointments.forEach(function (appointment) {
            $("#scheduledAppointments").append("<p>Patient: " + appointment.patient + ", Date: " + appointment.date + ", Time: " + appointment.time + "</p>");
        });
    }
});