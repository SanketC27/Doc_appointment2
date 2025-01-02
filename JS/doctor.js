$(document).ready(function () {
    // Simulated Appointments Data
    const appointments = [
        { id: 1, patient: "john.doe@example.com", date: "2024-04-01", time: "10:00 AM", status: "Pending" },
        { id: 2, patient: "jane.doe@example.com", date: "2024-04-02", time: "11:30 AM", status: "Pending" },
    ];

    // Populate Appointments Table
    appointments.forEach(function (appointment) {
        $("#appointmentsTable").append(
            `<tr>
                <td>${appointment.id}</td>
                <td>${appointment.patient}</td>
                <td>${appointment.date}</td>
                <td>${appointment.time}</td>
                <td id="status-${appointment.id}">${appointment.status}</td>
                <td>
                    <button class="btn btn-success btn-sm" onclick="approveAppointment(${appointment.id})">Approve</button>
                    <button class="btn btn-danger btn-sm" onclick="cancelAppointment(${appointment.id})">Cancel</button>
                </td>
            </tr>`
        );
    });

    // Update Availability
    $("#updateAvailability").click(function () {
        const status = $("#availabilityStatus").val();
        $("#availabilityMessage").html(`<div class='alert alert-success'>Availability updated to <strong>${status}</strong>!</div>`).show();
    });

    // View Medical History
    $("#viewMedicalHistory").click(function () {
        const patientEmail = $("#patientEmailForHistory").val();
        if (!patientEmail) {
            $("#medicalHistoryDisplay")
                .html("<div class='alert alert-danger'>Please enter a valid patient email.</div>")
                .show();
            return;
        }
        const historyData = `
            <h5>Medical History for ${patientEmail}</h5>
            <ul>
                <li>2023-06-15: Annual Checkup - All clear</li>
                <li>2023-09-10: Flu Symptoms - Prescribed medication</li>
            </ul>`;
        $("#medicalHistoryDisplay").html(historyData).show();
    });
});

// Approve and Cancel Appointment
function approveAppointment(id) {
    $(`#status-${id}`).text("Approved").css("color", "green");
}

function cancelAppointment(id) {
    $(`#status-${id}`).text("Cancelled").css("color", "red");
}
