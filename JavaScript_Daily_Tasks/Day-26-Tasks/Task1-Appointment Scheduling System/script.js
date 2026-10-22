let appointments = [];

function bookAppointment() {
    let name = document.getElementById("name").value.trim();
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let today = new Date();
    let selectedDate = new Date(date + "T00:00:00");
    today.setHours(0, 0, 0, 0);

    if (name === "" || date === "" || time === "") {
        document.getElementById("result").innerHTML =
            "Please fill in all appointment details.";
    }
    else if (selectedDate < today) {
        document.getElementById("result").innerHTML =
            "Please select today or a future date.";
    }
    else {
        let conflict = false;

        for (let i = 0; i < appointments.length; i++) {
            if (appointments[i].date === date &&
                appointments[i].time === time) {
                conflict = true;
            }
        }

        if (conflict) {
            document.getElementById("result").innerHTML =
                "This time slot is already booked. Please choose another time.";
        }
        else {
            let appointment = {
                name: name,
                date: date,
                time: time
            };

            appointments.push(appointment);
            showAppointments();

            document.getElementById("result").innerHTML =
                "Appointment booked successfully.";

            document.getElementById("name").value = "";
            document.getElementById("date").value = "";
            document.getElementById("time").value = "";
        }
    }
}

function showAppointments() {
    let list = document.getElementById("appointmentList");
    list.innerHTML = "";

    for (let i = 0; i < appointments.length; i++) {
        list.innerHTML += "<li>" +
            appointments[i].name + " - " +
            appointments[i].date + " at " +
            appointments[i].time + "</li>";
    }
}
