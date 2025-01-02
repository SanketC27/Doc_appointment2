$(document).ready(function () {
    var doctors = [
        { name: "Dr. John Smith", email: "john.smith@hospital.com", specialization: "Cardiology", available: true },
        { name: "Dr. Jane Doe", email: "jane.doe@hospital.com", specialization: "Dermatology", available: false },
        { name: "Dr. Michael Lee", email: "michael.lee@hospital.com", specialization: "Neurology", available: true }
    ];

    var appointments = [
        { id: 1, date: "2024-03-10", time: "10:00 AM", treatmentType: "Consultation", status: "Pending" },
        { id: 2, date: "2024-02-15", time: "11:30 AM", treatmentType: "Follow-up", status: "Approved" }
    ];

    function displayDoctors(doctorsToDisplay) {
        $("#doctorsList").empty();
        if (doctorsToDisplay.length === 0) {
            $("#doctorsList").append("<p>No doctors found.</p>");
        } else {
            doctorsToDisplay.forEach(function (doctor) {
                var availabilityClass = doctor.available ? "available" : "not-available";
                var availabilityText = doctor.available ? "Available" : "Not Available";

                var doctorInfo = `
                    <div class='doctor-item'>
                        <p>${doctor.name} - ${doctor.specialization}</p>
                        <p><span class='availability ${availabilityClass}'>${availabilityText}</span></p>
                        <button type='button' class='btn btn-primary btn-sm book-appointment-btn' data-toggle='modal' data-target='#appointmentModal' data-doctor-name='${doctor.name}' ${doctor.available ? "" : "disabled"}>Book Appointment</button>
                    </div>`;
                $("#doctorsList").append(doctorInfo);
            });
        }
        $("#doctorsList").show();
    }

    function displayCancelAppointments() {
        $("#cancelAppointments").empty();
        if (appointments.length === 0) {
            $("#cancelAppointments").html("<p>No booked appointments to cancel.</p>");
        } else {
            appointments.forEach(function (appointment) {
                $("#cancelAppointments").append(`
                    <div>
                        <p>Appointment ID: ${appointment.id}</p>
                        <p>Date: ${appointment.date}<br>Time: ${appointment.time}<br>Type: ${appointment.treatmentType}</p>
                        <p>Status: <span>${appointment.status}</span></p>
                        <button class='btn btn-danger btn-sm cancel-appointment-btn' data-id='${appointment.id}'>Cancel</button>
                        <hr>
                    </div>
                `);
            });
        }
    }

    $(document).on("click", ".cancel-appointment-btn", function () {
        var appointmentId = $(this).data("id");
        appointments = appointments.filter(function (appointment) {
            return appointment.id !== appointmentId;
        });
        displayCancelAppointments();
        alert("Appointment canceled successfully!");
    });

    $(document).on('show.bs.modal', '#appointmentModal', function (event) {
        var doctorName = $(event.relatedTarget).data('doctor-name');
        var modalContent = `
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Book Appointment with Dr. ${doctorName}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="bookAppointmentForm">
                        <div class="form-group">
                            <label for="appointmentDate">Date:</label>
                            <input type="date" class="form-control" id="appointmentDate" required>
                        </div>
                        <div class="form-group">
                            <label for="appointmentTime">Time:</label>
                            <input type="time" class="form-control" id="appointmentTime" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Book</button>
                        <div id="bookingMessage" class="mt-2" style="display:none"></div>
                    </form>
                </div>
            </div>
        </div>`;
        $(this).html(modalContent);
    });

    $("#showDoctorsBtn").click(function () {
        if ($("#doctorsList").is(":visible")) {
            $("#doctorsList").hide();
            $(this).text("Show Doctors");
        } else {
            displayDoctors(doctors);
            $(this).text("Hide Doctors");
        }
    });

    $("#doctorSearch").on("keyup", function () {
        var searchTerm = $(this).val().toLowerCase();
        var filteredDoctors = doctors.filter(function (doctor) {
            return doctor.name.toLowerCase().includes(searchTerm) || doctor.specialization.toLowerCase().includes(searchTerm);
        });
        displayDoctors(filteredDoctors);
    });

    displayCancelAppointments();
});
